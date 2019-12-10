'use strict';

class Room{

  constructor(){
    // this.inputFile = inputFile;
    // this.formattedInput = this.formatInput(inputFile);
    // this.dimensions = [5, 5];
    // this.convertStrCoOrdinates(this.formattedInput[0]);
    // this.currentPosition =
    // this.convertStrCoOrdinates(this.formattedInput[1]);
    // this.dirtPatches = this.getDirtPatches(this.formattedInput);
  };

  getDirtPatches(inputArray){
    return inputArray.slice(2, -1);
  };

};

module.exports = Room;
