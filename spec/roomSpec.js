'use strict';
var RoomClass = require('../src/room');

describe('Room', function(){

  var inputData = '5 4 \n1 2 \n1 0 \n2 2 \n2 3 \nNNESEESWNWW';

  describe('strConvertToCoordinates', function(){
    var room;

    beforeEach(function(){
      room = new RoomClass(inputData);
    });

    it('gets the x dimension from the input', function(){
      expect(room.strConvertToCoordinates('5 4 ')[0]).toBe(5);
    });

    it('gets the y dimension from the input', function(){
      expect(room.strConvertToCoordinates('5 4 ')[1]).toBe(4);
    });

    it('gets the string and saves it as an array of integers', function(){
      expect(room.strConvertToCoordinates('5 4 ')).toEqual([5, 4]);
    });

    it('gets the x co-ordinate from the input', function(){
      expect(room.strConvertToCoordinates('1 2 ')[0]).toBe(1);
    });

    it('gets the y co-ordinate  from the input', function(){
      expect(room.strConvertToCoordinates('1 2 ')[1]).toBe(2);
    });

    it('gets the string and saves it as an array of integers', function(){
      expect(room.strConvertToCoordinates('1 2 ')).toEqual([1, 2]);
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

  describe('coordinatesConvertToStr', function(){
    var room;

    beforeEach(function(){
      room = new RoomClass(inputData);
    });

    it('tracks the vacuum movement if moved west', function(){
      expect(room.coordinatesConvertToStr([1, 2])).toEqual('1 2 ');
    });

  });

  describe('vacuumLocationHistory', function(){
    var room;

    beforeEach(function(){
      room = new RoomClass(inputData);
    });

    it('stores a list of two moves if vacuum moved once', function(){
      expect(room.vacuumLocationHistory([1, 2], 'N')).toEqual(['1 2 ', '1 3 ']);
    });

    it('stores a list two moves if vacuum moved once', function(){
      expect(room.vacuumLocationHistory([1, 2], 'E')).toEqual(['1 2 ', '2 2 ']);
    });

    it('stores a list of three moves if vacuum moved twice', function(){
      expect(room.vacuumLocationHistory([1, 2], 'NN')).toEqual(
        ['1 2 ', '1 3 ', '1 4 ']
      );
    });

    it('stores a list of four moves if vacuum moved three times', function(){
      expect(room.vacuumLocationHistory([1, 2], 'NNE')).toEqual(
        ['1 2 ', '1 3 ', '1 4 ', '2 4 ']
      );
    });

    it('stores all moves', function(){
      expect(room.vacuumLocationHistory([1, 2], 'NNESEESWNWW')).toEqual(
        [
          '1 2 ', '1 3 ',
          '1 4 ', '2 4 ',
          '2 3 ', '3 3 ',
          '4 3 ', '4 2 ',
          '3 2 ', '3 3 ',
          '2 3 ', '1 3 ',
        ]
      );
    });

  });

  describe('finalPosition', function(){
    var room;

    beforeEach(function(){
      room = new RoomClass(inputData);
    });

    it('calculates how many dirt patches have been cleaned', function(){
      expect(room.finalPosition(['1 2 ', '1 3 ', '1 4 '])).toEqual('1 4 ');
    });

  });

  describe('dirtPatchesCleaned', function(){
    var room;
    var dirtPatches = ['1 2 ', '1 3 ', '1 4 '];

    beforeEach(function(){
      room = new RoomClass(inputData);
    });

    it('calculates how many dirt patches have been cleaned', function(){
      expect(room.dirtPatchesCleaned(
        dirtPatches,
        ['2 3 ', '1 3 ', '0 3 ']
      )).toBe(1);
    });

    it('calculates how many dirt patches have been cleaned', function(){
      expect(room.dirtPatchesCleaned(
        dirtPatches,
        ['2 3 ', '1 3 ', '1 2 ']
      )).toBe(2);
    });

    it('calculates how many dirt patches have been cleaned', function(){
      expect(room.dirtPatchesCleaned(
        dirtPatches,
        ['2 3 ', '2 4 ', '1 4 ', '1 3 ', '1 2 ']
      )).toBe(3);
    });

  });

  describe('formatCleaningReport', function(){
    var room;

    beforeEach(function(){
      room = new RoomClass(inputData);
    });

    it('calculates how many dirt patches have been cleaned', function(){
      expect(room.formatCleaningReport('1 3 ', 1)).toEqual('1 3 \n1');
    });

  });

  describe('printCleaningReport', function(){
    var room;

    beforeEach(function(){
      room = new RoomClass(inputData);
      spyOn(console, 'log');
    });

    it('calculates how many dirt patches have been cleaned', function(){
      room.printCleaningReport('1 3 \n1');
      expect(console.log).toHaveBeenCalledWith('1 3 \n1');
    });

  });

});
