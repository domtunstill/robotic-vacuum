'use strict';
function formatInput(inputFile){
  return inputFile.split('\n');
};

function strConvertToCoordinates(coordString){
  return coordString.trim().split(' ').map(
    coord => parseInt(coord, 10)
  );
};

function coordinatesConvertToStr(coordArray){
  return coordArray.join(' ') + ' ';
};

module.exports.formatInput = formatInput;
module.exports.strConvertToCoordinates = strConvertToCoordinates;
module.exports.coordinatesConvertToStr = coordinatesConvertToStr;
