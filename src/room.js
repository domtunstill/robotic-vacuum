'use strict';
class Room{

  constructor(inputFile){
    this.inputFile = inputFile;
  };

  formatInput(inputFile){
    return inputFile.split('\n');
  };

  convertStrCoOrdinates(coOrdString){
    return coOrdString.trim().split(' ').map(
      coOrd => parseInt(coOrd, 10)
    );
  };

  getDirtPatches(inputArray){
    return inputArray.slice(2, -1);
  };

};

module.exports = Room;
