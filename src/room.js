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
    var history = [this.coordinatesConvertToStr(startPosition), ''];
    history[1] = this.coordinatesConvertToStr(
      this.moveVacuum(startPosition, instructions)
    );
    return history;
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
