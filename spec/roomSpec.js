'use strict';
var RoomClass = require('../src/room');

describe('Room', function(){

  var inputData = '5 4 \n1 2 \n1 0 \n2 2 \n2 3 \nNNESEESWNWW';

  describe('formatInput', function(){
    var room;

    beforeEach(function(){
      room = new RoomClass(inputData);
    });

    it('converts input into array based on line breaks', function(){
      expect(room.formatInput('5 4 ')).toEqual(['5 4 ']);
    });

    it('converts input into array based on line breaks', function(){
      expect(room.formatInput('5 4 \n1 2 ')).toEqual(['5 4 ', '1 2 ']);
    });

    it('converts input into array based on line breaks', function(){
      var room = new RoomClass('5 4 \n1 2 \nNNESEESWNWW');
      expect(room.formatInput('5 4 \n1 2 \nNNESEESWNWW')).toEqual(
        ['5 4 ', '1 2 ', 'NNESEESWNWW']
      );
    });
  });

  describe('convertStrCoOrdinates', function(){
    var room;

    beforeEach(function(){
      room = new RoomClass(inputData);
    });

    it('gets the x dimension from the input', function(){
      expect(room.convertStrCoOrdinates('5 4 ')[0]).toBe(5);
    });

    it('gets the y dimension from the input', function(){
      expect(room.convertStrCoOrdinates('5 4 ')[1]).toBe(4);
    });

    it('gets the string and saves it as an array of integers', function(){
      expect(room.convertStrCoOrdinates('5 4 ')).toEqual([5, 4]);
    });

    it('gets the x co-ordinate from the input', function(){
      expect(room.convertStrCoOrdinates('1 2 ')[0]).toBe(1);
    });

    it('gets the y co-ordinate  from the input', function(){
      expect(room.convertStrCoOrdinates('1 2 ')[1]).toBe(2);
    });

    it('gets the string and saves it as an array of integers', function(){
      expect(room.convertStrCoOrdinates('1 2 ')).toEqual([1, 2]);
    });
  });

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

  describe('moveVacuum', function(){
    var room;

    beforeEach(function(){
      room = new RoomClass(inputData);
    });

    it('tracks the vacuum movement if moved north', function(){
      expect(room.moveVacuum([1, 2], 'N')).toEqual([1, 3]);
    });

    it('tracks the vacuum movement if moved east', function(){
      expect(room.moveVacuum([1, 2], 'E')).toEqual([2, 2]);
    });

    it('tracks the vacuum movement if moved south', function(){
      expect(room.moveVacuum([1, 2], 'S')).toEqual([1, 1]);
    });

    it('tracks the vacuum movement if moved west', function(){
      expect(room.moveVacuum([1, 2], 'W')).toEqual([0, 2]);
    });

  });

});
