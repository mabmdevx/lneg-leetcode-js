/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {

    let output = 0;

    for(i=0 ; i < nums.length; i++){
        for(j=0 ; j < nums.length; j++){
            if(nums[i] === nums[j] && i < j){
                output = output + 1;
            }
        }
    }
    
    return output;
};