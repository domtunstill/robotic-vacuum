'use strict';
class Room{

  constructor(inputFile){
    this.inputFile = inputFile;
    this.formattedInput = this.formatInput();
    this.roomDimensions = this.getRoomDimensions();
  };

  formatInput(){
    return this.inputFile.split('\n');
  };

  getRoomDimensions(){
    return this.formattedInput[0].trim().split(' ').map(
      coOrd => parseInt(coOrd, 10)
    );
  };

};

module.exports = Room;
