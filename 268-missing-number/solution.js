/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {

    let n = nums.length;

    let numsSet = new Set();
    for(i=0; i < n; i++){
        numsSet.add(nums[i]);
    }

    for (i=0; i < n; i++){
        if(numsSet.has(i) === false){
            return i;
        }
    }
    return n;
    
};