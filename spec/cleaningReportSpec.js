'use strict';
var report = require('../src/cleaningReport');

describe('CleaningReport', function(){

  describe('createCleaningReport', function(){
    it('creates a formatted string for the report', function(){
      expect(report.createCleaningReport('1 3 ', 1)).toEqual('1 3 \n1');
    });
  });

  describe('printCleaningReport', function(){
    it('prints the formatted report string to the console', function(){
      spyOn(console, 'log');
      report.printCleaningReport('1 3 \n1');
      expect(console.log).toHaveBeenCalledWith('1 3 \n1');
    });
  });

});
