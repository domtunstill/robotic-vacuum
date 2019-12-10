'use strict';

class Room{

  constructor(inputFile){
    // this.inputFile = inputFile;
    // this.formattedInput = this.formatInput(inputFile);
    // this.roomDimensions =
    // this.convertStrCoOrdinates(this.formattedInput[0]);
    // this.currentPosition =
    // this.convertStrCoOrdinates(this.formattedInput[1]);
    // this.dirtPatches = this.getDirtPatches(this.formattedInput);
  };

  getDirtPatches(inputArray){
    return inputArray.slice(2, -1);
  };

  vacuumLocationHistory(startPosition, instructions){
    var history = [startPosition];
    var i;
    var currentPosition = startPosition.slice(0);
    for (i = 0; i < instructions.length; i++) {
      currentPosition = this.moveVacuum(currentPosition, instructions[i]);
      history.push(currentPosition.slice(0));
    };
    return history;
  };

  finalPosition(vacuumLocations){
    return vacuumLocations.pop();
  };

  dirtPatchesCleaned(dirtPatches, vacuumLocations){
    var numberCleaned = 0;
    dirtPatches.forEach(
      patch => {
        if (vacuumLocations.includes(patch)){
          numberCleaned += 1;
        }
      });
    return numberCleaned;
  };

  createCleaningReport(finalPosition, numberCleaned){
    return finalPosition + '\n' + numberCleaned;
  };

  printCleaningReport(report){
    console.log(report);
  };

};

module.exports = Room;
