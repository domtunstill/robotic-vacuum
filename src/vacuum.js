'use strict';

const moves = { N: 1, S: -1, E: 1, W: -1};

function moveVacuum(position, move, roomDims){
  if (move === 'E' || move === 'W'){
    var newXCoord = position[0] + moves[move];
    if (newXCoord >= 0 && newXCoord < roomDims[0]){
      position[0] = newXCoord;
    }
  };
  if (move === 'N' || move === 'S'){
    var newYCoord = position[1] + moves[move];
    if (newYCoord >= 0 && newYCoord < roomDims[1]){
      position[1] = newYCoord;
    }
  };
  return position;
};

module.exports.moveVacuum = moveVacuum;
