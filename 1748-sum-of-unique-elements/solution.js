/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {

    let uniqMap = new Map();

    for(i=0; i < nums.length; i++){
        if(uniqMap.has(nums[i])){
            let count = uniqMap.get(nums[i]);
            uniqMap.set(nums[i], count + 1);
        } else {
            uniqMap.set(nums[i], 1);
        }
    }
    //console.log("uniqMap: ", uniqMap);

    let output = 0;
    for(const [k,v] of uniqMap){
        if(v === 1){
            output = output + k;
        }
    }

    return output;  
};