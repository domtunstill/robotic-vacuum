'use strict';
var RoomClass = require('../src/room');

describe('Room', function(){

  var inputData = '5 4 \n1 2 \n1 0 \n2 2 \n2 3 \nNNESEESWNWW';

  describe('formatInput', function(){
    var room;

    beforeEach(function(){
      room = new RoomClass(inputData);
    });

    it('converts input into array based on lines', function(){
      expect(room.formatInput('5 4 ')).toEqual(['5 4 ']);
    });

    it('converts input into array based on lines', function(){
      expect(room.formatInput('5 4 \n1 2 ')).toEqual(['5 4 ', '1 2 ']);
    });

    it('converts input into array based on lines', function(){
      var room = new RoomClass('5 4 \n1 2 \nNNESEESWNWW');
      expect(room.formatInput('5 4 \n1 2 \nNNESEESWNWW')).toEqual(
        ['5 4 ', '1 2 ', 'NNESEESWNWW']
      );
    });
  });

  describe('getRoomDimensions', function(){
    var room;

    beforeEach(function(){
      room = new RoomClass(inputData);
    });
    it('gets the x dimension from first line of the input', function(){
      expect(room.getRoomDimensions('5 4 ')[0]).toBe(5);
    });

    it('gets the y dimension from first line of the input', function(){
      expect(room.getRoomDimensions('5 4 ')[1]).toBe(4);
    });

    it('gets the y dimension from first line of the input', function(){
      var room = new RoomClass('5 4 ');
      expect(room.getRoomDimensions('5 4 ')).toEqual([5, 4]);
    });
  });

  describe('getStartPosition', function(){
    var room;

    beforeEach(function(){
      room = new RoomClass(inputData);
    });
    it('gets the x dimension from first line of the input', function(){
      expect(room.getStartPosition('1 2 ')[0]).toBe(1);
    });

    it('gets the x dimension from first line of the input', function(){
      expect(room.getStartPosition('1 2 ')[1]).toBe(2);
    });

    it('gets the x dimension from first line of the input', function(){
      expect(room.getStartPosition('1 2 ')).toEqual([1, 2]);
    });
  });

});
