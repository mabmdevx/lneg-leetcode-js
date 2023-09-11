/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function(nums) {
    
    let sum = 0;

    let numsLen = nums.length;
    for(i=0; i < numsLen; i++){
        let j = i + 1;
        if(numsLen % j === 0){
            sum = sum + (nums[i] * nums[i]);
        }
    }

    return sum;
};