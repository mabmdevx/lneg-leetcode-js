/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {

    let runningSum = 0;
    let ansArr = [];

    for(i=0; i < nums.length; i++){
        runningSum = runningSum + nums[i];
        ansArr.push(runningSum);
    }
    
    return ansArr;
};