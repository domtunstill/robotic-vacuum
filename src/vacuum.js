'use strict';
function moveVacuum(position, move){
  if (move === 'N'){
    position[1] += 1;
    return position;
  };
  if (move === 'E'){
    position[0] += 1;
    return position;
  };
  if (move === 'S'){
    position[1] -= 1;
    return position;
  };
  if (move === 'W'){
    position[0] -= 1;
    return position;
  };
};

module.exports.moveVacuum = moveVacuum;
