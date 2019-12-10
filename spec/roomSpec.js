describe("Room", function(){

    var roomFunction = require('../src/room');
    console.log(roomFunction)
    // beforeEach(function(){
    //     room = new Room();
    // });

    it ('converts input into array based on lines', function(){
        room = new roomFunction('5 5 ');
        expect(room.formattedInput).toEqual(['5 5 '])
    });

    it ('converts input into array based on lines', function(){
        room = new roomFunction('5 5 \n1 2 ');
        expect(room.formattedInput).toEqual(['5 5 ','1 2 '])
    });

    // it ('takes the room dimensions from the first line of the input', function(){
    //     room = new roomFunction('5 5 ');
    //     expect(room.x_dimension).toBe(5)
    // });

});
