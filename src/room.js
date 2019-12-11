'use strict';

var formatter = require('../src/formatter');

class Room{

  constructor(inputData){
    this.dimensions = formatter.strConvertToCoordinates(inputData[0]);
    this.dirtPatches = this.getDirtPatches(inputData);
  };

  getDirtPatches(inputArray){
    return inputArray.slice(2, -1);
  };

};

module.exports = Room;
