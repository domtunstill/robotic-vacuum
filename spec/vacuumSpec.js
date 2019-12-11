'use strict';
var vacuum = require('../src/vacuum');

describe('Vacuum', function(){
  describe('moveVacuum', function(){

    it('tracks the vacuum movement if moved north', function(){
      expect(vacuum.moveVacuum([1, 2], 'N', [5, 5])).toEqual([1, 3]);
    });

    it('tracks the vacuum movement if moved east', function(){
      expect(vacuum.moveVacuum([1, 2], 'E', [5, 5])).toEqual([2, 2]);
    });

    it('tracks the vacuum movement if moved south', function(){
      expect(vacuum.moveVacuum([1, 2], 'S', [5, 5])).toEqual([1, 1]);
    });

    it('tracks the vacuum movement if moved west', function(){
      expect(vacuum.moveVacuum([1, 2], 'W', [5, 5])).toEqual([0, 2]);
    });

    it('can\'t move north if it is outside dimensions of room', function(){
      expect(vacuum.moveVacuum([1, 4], 'N', [5, 5])).toEqual([1, 4]);
    });

    it('can\'t move south if it is outside dimensions of room', function(){
      expect(vacuum.moveVacuum([1, 0], 'S', [5, 5])).toEqual([1, 0]);
    });

    it('can\'t move east if it is outside dimensions of room', function(){
      expect(vacuum.moveVacuum([4, 1], 'E', [5, 5])).toEqual([4, 1]);
    });

    it('can\'t move west if it is outside dimensions of room', function(){
      expect(vacuum.moveVacuum([0, 1], 'W', [5, 5])).toEqual([0, 1]);
    });

  });

  describe('finalVacuumPosition', function(){

    it('returns the final position of the cleaner', function(){
      expect(vacuum.finalVacuumPosition(
        ['2 4 ', '1 4 ', '1 3 ']
      )).toEqual('1 3 ');
    });

  });

});
