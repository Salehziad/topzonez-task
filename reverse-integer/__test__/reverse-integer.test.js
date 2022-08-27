'use strict';

const reverseInteger =require('../reverse-integer');

describe('reverseInteger function()', () => {

  it('reverseInteger()', () => {
    let integer=123;
    expect(reverseInteger(integer)).toEqual(321);
  });
});;