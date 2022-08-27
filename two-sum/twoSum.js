'use strict';

const twoSum = (nums, target) => {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const value = target - nums[i];
        if (map.has(value)) {
            return [
                map.get(value),
                i
            ];
        }
        map.set(nums[i], i);
    };
};

console.log(twoSum([
    3, 2, 4
], 6));

module.exports = twoSum;
