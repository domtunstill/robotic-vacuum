'use strict';
class Room{

  constructor(inputFile){
    this.inputFile = inputFile;
  };

  formatInput(inputFile){
    return inputFile.split('\n');
  };

  getRoomDimensions(dimensionString){
    return dimensionString.trim().split(' ').map(
      coOrd => parseInt(coOrd, 10)
    );
  };

  getStartPosition(startString){
    return startString.trim().split(' ').map(
      coOrd => parseInt(coOrd, 10)
    );
  };

};

module.exports = Room;
