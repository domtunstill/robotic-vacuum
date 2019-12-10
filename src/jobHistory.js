'use strict';
var vacuum = require('../src/vacuum');
var formatter = require('../src/formatter');
var Room = require('../src/room');

class JobHistory{

  constructor(roomClass){
    this.vacuumLocations = [];
    this.dirtPatchesCleaned = 0;
    this.room = roomClass || new Room();
  };

  vacuumLocationHistory(startPosition, instructions){
    this.vacuumLocations.push(formatter.coordinatesConvertToStr(startPosition));
    var i;
    var currentPosition = startPosition;
    for (i = 0; i < instructions.length; i++) {
      currentPosition = vacuum.moveVacuum(
        currentPosition,
        instructions[i],
        this.room.dimensions
      );
      this.vacuumLocations.push(
        formatter.coordinatesConvertToStr(currentPosition)
      );
    };
    return this.vacuumLocations;
  };

  getDirtPatchesCleaned(dirtPatches){
    dirtPatches.forEach(
      patch => {
        if (this.vacuumLocations.includes(patch)){
          this.dirtPatchesCleaned += 1;
        }
      });
    return this.dirtPatchesCleaned;
  };

  finalPosition(){
    return this.vacuumLocations.pop();
  };

};

module.exports = JobHistory;
