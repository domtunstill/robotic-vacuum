'use strict';
var fs = require('fs');

function createCleaningReport(finalPosition, numberCleaned){
  return finalPosition + '\n' + numberCleaned;
};

function printCleaningReport(report){
  console.log(report);
  
  fs.writeFile('output.txt', report, function(err) {
    if (err) {
      return console.log(err);
    }
    console.log('The file was saved!');
  });
};

module.exports.createCleaningReport = createCleaningReport;
module.exports.printCleaningReport = printCleaningReport;
