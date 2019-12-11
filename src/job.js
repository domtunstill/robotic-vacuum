'use strict';
var vacuum = require('./vacuum');
var formatter = require('./formatter');
var Room = require('./room');

class Job{

  constructor(inputData, roomClass){
    this.jobData = formatter.formatInput(inputData);
    this.startPosition = formatter.strConvertToCoordinates(this.jobData[1]);
    this.instructions = this.jobData.slice(-1)[0];
    this.room = roomClass || new Room(this.jobData);
    this.vacuumLocations = this.vacuumLocationHistory(
      this.startPosition,
      this.instructions
    );
    this.dirtPatchesCleaned = this.getDirtPatchesCleaned(this.room.dirtPatches);
  };

  vacuumLocationHistory(startPosition, instructions){
    var vacuumLocations = [];
    vacuumLocations.push(formatter.coordinatesConvertToStr(startPosition));
    var i;
    var currentPosition = startPosition;
    for (i = 0; i < instructions.length; i++) {
      currentPosition = vacuum.moveVacuum(
        currentPosition,
        instructions[i],
        this.room.dimensions
      );
      vacuumLocations.push(
        formatter.coordinatesConvertToStr(currentPosition)
      );
    };
    return vacuumLocations;
  };

  getDirtPatchesCleaned(dirtPatches){
    var dirtPatchesCleaned = 0;
    dirtPatches.forEach(
      patch => {
        if (this.vacuumLocations.includes(patch)){
          dirtPatchesCleaned += 1;
        }
      });
    return dirtPatchesCleaned;
  };

  finalPosition(){
    return this.vacuumLocations.pop();
  };

};

module.exports = Job;
