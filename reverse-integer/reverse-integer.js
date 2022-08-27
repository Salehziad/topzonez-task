'use strict';

const reverseInteger=(integer)=>{
    integer<0?integer*=-1:null;
    let reverse=0;
    while(integer>1){
        reverse=Math.floor(reverse*10+(integer%10));
        console.log(reverse);
        integer/=10;
    }
    return reverse;
}

console.log(reverseInteger(-123));

module.exports = reverseInteger;