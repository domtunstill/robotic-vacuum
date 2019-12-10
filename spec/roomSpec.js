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

  // it ('takes the room dimensions from the first li
  // ne of the input', function(){
  //     room = new roomClass('5 5 ');
  //     expect(room.x_dimension).toBe(5)
  // });

});
