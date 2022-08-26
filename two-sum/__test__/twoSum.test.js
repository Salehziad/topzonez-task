'use strict';

const twoSum = require('../twoSum');

describe('twoSum function()', () => {

  it('twoSum()', () => {
    let array = [5, 2, 4, 6, 1, 3];
    let target=7;
    expect(twoSum(array,target)).toEqual([0,1]);
  });
});