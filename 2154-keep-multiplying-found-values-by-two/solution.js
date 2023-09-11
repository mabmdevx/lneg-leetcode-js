/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {

    let numsSet = new Set();

    for(i=0; i < nums.length; i++){
        numsSet.add(nums[i]);
    }

    let val = original;
    while(numsSet.has(val)){
        val = val * 2;
    }

    return val;
    
};