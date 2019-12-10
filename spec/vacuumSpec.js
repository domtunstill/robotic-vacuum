'use strict';
var vacuum = require('../src/vacuum');

describe('Vacuum', function(){
  describe('moveVacuum', function(){

    it('tracks the vacuum movement if moved north', function(){
      expect(vacuum.moveVacuum([1, 2], 'N')).toEqual([1, 3]);
    });

    it('tracks the vacuum movement if moved east', function(){
      expect(vacuum.moveVacuum([1, 2], 'E')).toEqual([2, 2]);
    });

    it('tracks the vacuum movement if moved south', function(){
      expect(vacuum.moveVacuum([1, 2], 'S')).toEqual([1, 1]);
    });

    it('tracks the vacuum movement if moved west', function(){
      expect(vacuum.moveVacuum([1, 2], 'W')).toEqual([0, 2]);
    });

  });
});
