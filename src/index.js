'use strict';
var fs = require('fs');
var Job = require('./job');
var report = require('./cleaningReport');
var job;

function getJob(callbackOne, callbackTwo){
  fs.readFile('input.txt', 'utf8', function(err, data){
    if (err) throw err;
    callbackOne(data);
    callbackTwo();
  });
};

function newJob(jobInfo){
  job = new Job(jobInfo);
};

function printReport(){
  report.printCleaningReport(report.createCleaningReport(
    job.finalVacuumPosition, job.dirtPatchesCleaned
  ));
};

getJob(newJob, printReport);
