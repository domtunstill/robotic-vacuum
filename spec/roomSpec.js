'use strict';
var RoomClass = require('../src/room');

describe('Room', function(){

  // beforeEach(function(){
  //     room = new Room();
  // });

  it('converts input into array based on lines', function(){
    var room = new RoomClass('5 5 ');
    expect(room.formattedInput).toEqual(['5 5 ']);
  });

  it('converts input into array based on lines', function(){
    var room = new RoomClass('5 5 \n1 2 ');
    expect(room.formattedInput).toEqual(['5 5 ', '1 2 ']);
  });

  it('converts input into array based on lines', function(){
    var room = new RoomClass('5 5 \n1 2 \nNNESEESWNWW');
    expect(room.formattedInput).toEqual(
      ['5 5 ', '1 2 ', 'NNESEESWNWW']
    );
  });

  it('gets the x dimension from first line of the input', function(){
    var room = new RoomClass('5 5 ');
    expect(room.xDimension).toBe(5);
  });

});
