/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {

    let numsMap = new Map();

    for(i=0; i < nums.length; i++){
        if((nums[i] % 2 === 0)){
            if(numsMap.has(nums[i])){
                let count = numsMap.get(nums[i]);
                numsMap.set(nums[i], count + 1);
            } else {
                numsMap.set(nums[i], 1);
            }
        }
    }
    //console.log("numsMap: ", numsMap);

    let mostFreqVal = Number.MIN_SAFE_INTEGER;
    let mostFreqKey = -1;

    for(const [k,v] of numsMap){
        if(mostFreqVal < v){
            mostFreqVal = v;
            mostFreqKey = k;
        }
        if(v === mostFreqVal){
            if(k < mostFreqKey){
                mostFreqKey = k;
            }
        }
    }
    
    //console.log("mostFreqKey: ", mostFreqKey)

    return mostFreqKey;
};