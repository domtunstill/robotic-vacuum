'use strict';
var fs = require('fs');
var Job = require('./job');
var report = require('./cleaningReport');

var inputData = fs.readFileSync('input.txt', 'utf8');
var job = new Job(inputData);

var jobReport = report.createCleaningReport(
  job.finalPosition(), job.dirtPatchesCleaned
);

report.printCleaningReport(jobReport);
