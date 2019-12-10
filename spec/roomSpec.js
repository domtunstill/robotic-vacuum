'use strict';
var RoomClass = require('../src/room');

describe('Room', function(){

  var inputData = '5 4 \n1 2 \n1 0 \n2 2 \n2 3 \nNNESEESWNWW';

  describe('getDirtPatches', function(){
    var room;
    var inputArray = ['5 4 ', '1 2 ', '1 0 ', '2 2 ', '2 3 ', 'NNESEESWNWW'];

    beforeEach(function(){
      room = new RoomClass(inputData);
    });

    it('takes the input data and outputs an array of dirt patches', function(){
      expect(room.getDirtPatches(inputArray)[0]).toEqual('1 0 ');
    });

    it('takes the input data and outputs an array of dirt patches', function(){
      expect(room.getDirtPatches(inputArray)[1]).toEqual('2 2 ');
    });

    it('takes the input data and outputs an array of dirt patches', function(){
      expect(room.getDirtPatches(inputArray).length).toBe(3);
    });
  });

});
