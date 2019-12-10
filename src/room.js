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

  moveVacuum(position, move){
    if (move === 'N'){
      position[1] += 1;
      return position;
    };
    if (move === 'E'){
      position[0] += 1;
      return position;
    };
    if (move === 'S'){
      position[1] -= 1;
      return position;
    };
    if (move === 'W'){
      position[0] -= 1;
      return position;
    };
  };

  vacuumLocationHistory(startPosition, instructions){
    var history = [this.coordinatesConvertToStr(startPosition)];
    var i;
    var currentPosition = startPosition;
    for (i = 0; i < instructions.length; i++) {
      currentPosition = this.moveVacuum(currentPosition, instructions[i]);
      history[i + 1] = this.coordinatesConvertToStr(currentPosition);
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

  formatCleaningReport(finalPosition, numberCleaned){
    return finalPosition + '\n' + numberCleaned;
  };

  printCleaningReport(report){
    console.log(report);
  };

  formatInput(inputFile){
    return inputFile.split('\n');
  };

  strConvertToCoordinates(coordString){
    return coordString.trim().split(' ').map(
      coord => parseInt(coord, 10)
    );
  };

  coordinatesConvertToStr(coordArray){
    return coordArray.join(' ') + ' ';
  };

};

module.exports = Room;
