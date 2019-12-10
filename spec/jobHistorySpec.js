'use strict';
var JobHistory = require('../src/jobHistory');
var jobHistory;
class Room{
  constructor(){
    this.dimensions = [5, 5];
  }
};

describe('JobHistory', function(){

  describe('vacuumLocationHistory', function(){

    beforeEach(function(){
      var room = new Room();
      jobHistory = new JobHistory(room);
    });

    it('stores a list of two moves if vacuum moved once', function(){
      expect(jobHistory.vacuumLocationHistory(
        [1, 2], 'N')
      ).toEqual(['1 2 ', '1 3 ']);
    });

    it('stores a list two moves if vacuum moved once', function(){
      expect(jobHistory.vacuumLocationHistory(
        [1, 2], 'E')
      ).toEqual(['1 2 ', '2 2 ']);
    });

    it('stores a list of three moves if vacuum moved twice', function(){
      expect(jobHistory.vacuumLocationHistory([1, 2], 'NN')).toEqual(
        ['1 2 ', '1 3 ', '1 4 ']
      );
    });

    it('stores a list of four moves if vacuum moved three times', function(){
      expect(jobHistory.vacuumLocationHistory([1, 2], 'NNE')).toEqual(
        ['1 2 ', '1 3 ', '1 4 ', '2 4 ']
      );
    });

    it('stores all moves', function(){
      expect(jobHistory.vacuumLocationHistory([1, 2], 'NNESEESWNWW')).toEqual(
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

  describe('getDirtPatchesCleaned', function(){
    var jobHistory;
    var dirtPatches = ['1 0 ', '2 2 ', '2 3 '];

    beforeEach(function(){
      var room = new Room();
      jobHistory = new JobHistory(room);
    });

    it('calculates how many dirt patches have been cleaned', function(){
      jobHistory.vacuumLocationHistory([1, 2], 'E');
      expect(jobHistory.getDirtPatchesCleaned(dirtPatches)).toBe(1);
    });

    it('calculates how many dirt patches have been cleaned', function(){
      jobHistory.vacuumLocationHistory([1, 2], 'EN');
      expect(jobHistory.getDirtPatchesCleaned(dirtPatches)).toBe(2);
    });

    it('calculates how many dirt patches have been cleaned', function(){
      jobHistory.vacuumLocationHistory([1, 2], 'SSNNEN');
      expect(jobHistory.getDirtPatchesCleaned(dirtPatches)).toBe(3);
    });

  });

  describe('finalPosition', function(){
    var jobHistory;

    beforeEach(function(){
      var room = new Room();
      jobHistory = new JobHistory(room);
    });

    it('calculates how many dirt patches have been cleaned', function(){
      jobHistory.vacuumLocationHistory([1, 2], 'NN');
      expect(jobHistory.finalPosition(
        ['1 2 ', '1 3 ', '1 4 ']
      )).toEqual('1 4 ');
    });

  });
});
