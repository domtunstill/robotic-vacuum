'use strict';
var formatter = require('../src/formatter');

describe('Formatter', function(){
  describe('formatInput', function(){

    it('converts input into array based on line breaks', function(){
      expect(formatter.formatInput('5 4 ')).toEqual(['5 4 ']);
    });

    it('converts input into array based on line breaks', function(){
      expect(formatter.formatInput('5 4 \n1 2 ')).toEqual(['5 4 ', '1 2 ']);
    });

    it('converts input into array based on line breaks', function(){
      expect(formatter.formatInput('5 4 \n1 2 \nNNESEESWNWW')).toEqual(
        ['5 4 ', '1 2 ', 'NNESEESWNWW']
      );
    });
  });

  describe('strConvertToCoordinates', function(){

    it('gets the x dimension from the input', function(){
      expect(formatter.strConvertToCoordinates('5 4 ')[0]).toBe(5);
    });

    it('gets the y dimension from the input', function(){
      expect(formatter.strConvertToCoordinates('5 4 ')[1]).toBe(4);
    });

    it('gets the string and saves it as an array of integers', function(){
      expect(formatter.strConvertToCoordinates('5 4 ')).toEqual([5, 4]);
    });

    it('gets the x co-ordinate from the input', function(){
      expect(formatter.strConvertToCoordinates('1 2 ')[0]).toBe(1);
    });

    it('gets the y co-ordinate  from the input', function(){
      expect(formatter.strConvertToCoordinates('1 2 ')[1]).toBe(2);
    });

    it('gets the string and saves it as an array of integers', function(){
      expect(formatter.strConvertToCoordinates('1 2 ')).toEqual([1, 2]);
    });
  });

  describe('coordinatesConvertToStr', function(){

    it('tracks the vacuum movement if moved west', function(){
      expect(formatter.coordinatesConvertToStr([1, 2])).toEqual('1 2 ');
    });

  });

});
