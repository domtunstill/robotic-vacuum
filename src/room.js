'use strict';
class Room{

  constructor(inputFile){
    this.formattedInput = this.formatInput(inputFile);
    this.xDimension = this.getXDimension();
  };

  formatInput(inputFile){
    return inputFile.split('\n');
  };

  getXDimension(){
    return parseInt(this.formattedInput[0], 10);
  };

};

module.exports = Room;
