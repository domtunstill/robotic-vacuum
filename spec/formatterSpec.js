'use strict';
var formatter = require('../src/formatter');

describe('Formatter', function(){
  describe('formatInput', function(){

    // beforeEach(function(){
    //   room = new RoomClass(inputData);
    // });

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
});
