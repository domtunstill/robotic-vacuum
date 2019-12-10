'use strict';
class Room{

  constructor(inputFile){
    this.formattedInput = this.formatInput(inputFile);
  };

  formatInput(inputFile){
    return inputFile.split('\n');
  };

};

module.exports = Room;
