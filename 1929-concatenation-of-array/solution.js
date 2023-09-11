/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {

    let ansArr = [];

    for(i=0 ; i < nums.length; i++){
        ansArr[i] = nums[i];
    }
    j=0;
    for(i=nums.length ; i < 2 * nums.length; i++){
        ansArr[i] = nums[j];
        j=j+1;
    }
    //console.log("ansArr: ", ansArr);

    return ansArr;
};