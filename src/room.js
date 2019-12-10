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

};

module.exports = Room;
