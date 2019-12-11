'use strict';
var Job = require('../src/job');
var job;
var inputData = '5 6 \n1 2 \n1 0 \n2 2 \n2 3 \nNNESEESWNWW';

describe('Job', function(){

  describe('vacuumLocationHistory', function(){

    beforeEach(function(){
      job = new Job(inputData);
    });

    it('stores a list of two moves if vacuum moved once', function(){
      expect(job.vacuumLocationHistory(
        [1, 2], 'N')
      ).toEqual(['1 2 ', '1 3 ']);
    });

    it('stores a list two moves if vacuum moved once', function(){
      expect(job.vacuumLocationHistory(
        [1, 2], 'E')
      ).toEqual(['1 2 ', '2 2 ']);
    });

    it('stores a list of three moves if vacuum moved twice', function(){
      expect(job.vacuumLocationHistory([1, 2], 'NN')).toEqual(
        ['1 2 ', '1 3 ', '1 4 ']
      );
    });

    it('stores a list of four moves if vacuum moved three times', function(){
      expect(job.vacuumLocationHistory([1, 2], 'NNE')).toEqual(
        ['1 2 ', '1 3 ', '1 4 ', '2 4 ']
      );
    });

    it('stores all moves', function(){
      expect(job.vacuumLocationHistory([1, 2], 'NNESEESWNWW')).toEqual(
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

    beforeEach(function(){
      job = new Job(inputData);
    });

    it('calculates how many dirt patches have been cleaned', function(){
      expect(job.getDirtPatchesCleaned(['1 2 '])).toBe(1);
    });

    it('calculates how many dirt patches have been cleaned', function(){
      expect(job.getDirtPatchesCleaned(['1 2 ', '1 3 '])).toBe(2);
    });

    it('calculates how many dirt patches have been cleaned', function(){
      expect(job.getDirtPatchesCleaned(['1 2 ', '1 3 ', '1 4 '])).toBe(3);
    });

  });

  describe('finalPosition', function(){

    beforeEach(function(){
      job = new Job(inputData);
    });

    it('returns the final position of the cleaner', function(){
      expect(job.finalPosition()).toEqual('1 3 ');
    });

  });
});
