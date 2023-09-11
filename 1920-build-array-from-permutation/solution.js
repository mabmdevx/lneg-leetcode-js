/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {

    let ansArr = [];
    for(i=0; i < nums.length; i++){
        let temp = nums[i];
        ansArr.push(nums[temp]);
    }
    return ansArr;
};