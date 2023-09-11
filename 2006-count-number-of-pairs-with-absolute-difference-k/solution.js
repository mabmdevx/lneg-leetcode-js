/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function(nums, k) {
    
    let output = 0;
    for(i=0; i < nums.length; i++){
        for(j=0; j < nums.length; j++){
            if( (i < j) && Math.abs(nums[i] - nums[j]) === k){
                output = output + 1;
            }
        }
    }

    return output;
};