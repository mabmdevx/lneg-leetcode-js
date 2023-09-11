/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {

    let numsFreqMap = new Map();

    for(i=0; i < nums.length; i++){
        if(numsFreqMap.has(nums[i])){
            let count = numsFreqMap.get(nums[i]);
            numsFreqMap.set(nums[i], count + 1);
        } else {
            numsFreqMap.set(nums[i], 1);
        }
    }
    //console.log("numsFreqMap: ", numsFreqMap);

    let foundDuplicate = false;
    for(const [k,v] of numsFreqMap){
        if(v > 1){
            foundDuplicate = true;
            break;
        }
    }
    
    return foundDuplicate;
};