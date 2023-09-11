/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {

    let numsSet = new Set();
    for(i=0; i < nums.length; i++){
        numsSet.add(nums[i]);
    }
    //console.log("numsSet: ", numsSet);

    let outputArr = [];
    for(i=1; i <= nums.length; i++){
        if(numsSet.has(i) === false){
            outputArr.push(i);
        }
    }

    return outputArr;
    
};