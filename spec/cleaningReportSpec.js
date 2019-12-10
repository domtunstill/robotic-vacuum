'use strict';
var report = require('../src/cleaningReport');

describe('CleaningReport', function(){
  describe('createCleaningReport', function(){
    it('calculates how many dirt patches have been cleaned', function(){
      expect(report.createCleaningReport('1 3 ', 1)).toEqual('1 3 \n1');
    });
  });

  describe('printCleaningReport', function(){
    it('calculates how many dirt patches have been cleaned', function(){
      report.printCleaningReport('1 3 \n1');
      expect(console.log).toHaveBeenCalledWith('1 3 \n1');
    });
  });

});
