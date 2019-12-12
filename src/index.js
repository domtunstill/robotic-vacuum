'use strict';
var fs = require('fs');
var Job = require('./job');
var report = require('./cleaningReport');
var job;

function newJob(callback){
  fs.readFile('input.txt', 'utf8', function(err, data){
    job = new Job(data);
    callback();
  });
};

function printReport(){
  report.printCleaningReport(report.createCleaningReport(
    job.finalVacuumPosition, job.dirtPatchesCleaned
  ))
};

newJob(printReport);

