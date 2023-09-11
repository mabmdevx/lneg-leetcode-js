/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {

    let elemSum = 0;
    for(i=0; i < nums.length; i++){
        elemSum = elemSum + nums[i];
    }
    //console.log("elemSum: ", elemSum);

    let digitStr = "";
    for(i=0; i < nums.length; i++){
        digitStr = digitStr + nums[i].toString();
        //console.log("digitStr: ", digitStr)
    }

    let digitSum = 0;
    for(i=0; i < digitStr.length; i++){
        digitSum = digitSum + parseInt(digitStr.charAt(i));
        //console.log("digitSum: ", digitSum)
    }
    

    //console.log("digitSum: ", digitSum);

    return Math.abs(elemSum - digitSum);
    
};