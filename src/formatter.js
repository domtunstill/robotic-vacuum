'use strict';
function formatInput(inputFile){
  return inputFile.split('\n');
};

function strConvertToCoordinates(coordString){
  return coordString.trim().split(' ').map(
    coord => parseInt(coord, 10)
  );
};

module.exports.formatInput = formatInput;
module.exports.strConvertToCoordinates = strConvertToCoordinates;
