'use strict';
function createCleaningReport(finalPosition, numberCleaned){
  return finalPosition + '\n' + numberCleaned;
};

function printCleaningReport(report){
  console.log(report);
};

module.exports.createCleaningReport = createCleaningReport;
module.exports.printCleaningReport = printCleaningReport;
