/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRigthDifference = function(nums) {

    let leftSumArr = [];
    let leftSum = 0;
    for(i=0; i < nums.length; i++){
        leftSumArr.push(leftSum);
        leftSum = leftSum + nums[i];
    }
    //console.log("leftSumArr: ", leftSumArr);

    let rightSumArrTemp = [];
    let rightSum = 0;
    for(i=nums.length-1; i >= 0; i--){
        rightSumArrTemp.push(rightSum);
        rightSum = rightSum + nums[i];
    }
    let rightSumArr = [];
    for(i=rightSumArrTemp.length-1; i >= 0; i--){
        rightSumArr.push(rightSumArrTemp[i]);
    }
    //console.log("rightSumArr: ", rightSumArr);

    let ansArr = [];
    for(i=0; i < nums.length; i++){
        //console.log("leftSum i ", leftSumArr[i]);
        //console.log("rightSum i ", rightSumArr[i]);

        let val = Math.abs(leftSumArr[i] - rightSumArr[i]);
        //console.log("val: ", val);
        ansArr.push(val)
    }
    console.log("ansArr: ", ansArr);
    
    return ansArr;
};