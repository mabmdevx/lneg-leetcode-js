/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {

    let numsMap = new Map();
    for(i=0; i < nums.length; i++){
        if(numsMap.has(nums[i])){
            let count = numsMap.get(nums[i]);
            numsMap.set(nums[i], count + 1);
        } else {
            numsMap.set(nums[i], 1);
        }
    }
    //console.log("numsMap: ", numsMap);

    for(const [k,v] of numsMap){
        if(v >= (nums.length/2)){
            return k;
        }
    }

    
};