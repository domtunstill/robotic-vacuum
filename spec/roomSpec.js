'use strict';
var RoomClass = require('../src/room');

describe('Room', function(){

  // beforeEach(function(){
  //     room = new Room();
  // });

  describe('formatInput', function(){
    it('converts input into array based on lines', function(){
      var room = new RoomClass('5 4 ');
      expect(room.formattedInput).toEqual(['5 4 ']);
    });

    it('converts input into array based on lines', function(){
      var room = new RoomClass('5 4 \n1 2 ');
      expect(room.formattedInput).toEqual(['5 4 ', '1 2 ']);
    });

    it('converts input into array based on lines', function(){
      var room = new RoomClass('5 4 \n1 2 \nNNESEESWNWW');
      expect(room.formattedInput).toEqual(
        ['5 4 ', '1 2 ', 'NNESEESWNWW']
      );
    });
  });

  describe('getRoomDimensions', function(){
    it('gets the x dimension from first line of the input', function(){
      var room = new RoomClass('5 4 ');
      expect(room.roomDimensions[0]).toBe(5);
    });

    it('gets the y dimension from first line of the input', function(){
      var room = new RoomClass('5 4 ');
      expect(room.roomDimensions[1]).toBe(4);
    });

    it('gets the y dimension from first line of the input', function(){
      var room = new RoomClass('5 4 ');
      expect(room.roomDimensions).toEqual([5, 4]);
    });
  });

});
