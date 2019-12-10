'use strict';
class Room{

  constructor(inputFile){
    this.inputFile = inputFile;
    this.formattedInput = this.formatInput(inputFile);
    this.roomDimensions = this.convertStrCoOrdinates(this.formattedInput[0]);
    this.currentPosition = this.convertStrCoOrdinates(this.formattedInput[1]);
    this.dirtPatches = this.getDirtPatches(this.formattedInput);
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

  formatInput(inputFile){
    return inputFile.split('\n');
  };

  convertStrCoOrdinates(coOrdString){
    return coOrdString.trim().split(' ').map(
      coOrd => parseInt(coOrd, 10)
    );
  };

};

module.exports = Room;
