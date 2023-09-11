/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {

    let numsSet = new Set();
    for(i=0; i < nums.length; i++){
        numsSet.add(nums[i]);
    }
    //console.log("numsSet: ", numsSet);

    let maxNum = Number.MIN_SAFE_INTEGER;
    //console.log("maxNum: ", maxNum);

    for(i=0; i < nums.length; i++){
        if( (maxNum < nums[i]) && (numsSet.has(nums[i]*-1)) ){
            maxNum = nums[i];
        }
    }
    //console.log("maxNum: ", maxNum);

    if(maxNum === Number.MIN_SAFE_INTEGER){
        maxNum = -1;
    }

    return maxNum;
    
};