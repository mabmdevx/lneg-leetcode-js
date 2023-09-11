/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {

    let n = nums.length/2;
    //console.log("n: ", n);

    let freqMap = new Map();
    for(i=0; i < nums.length; i++){
        if(freqMap.has(nums[i])){
            let count = freqMap.get(nums[i]);
            freqMap.set(nums[i], count + 1);
        } else {
            freqMap.set(nums[i], 1);
        }
    }
    //console.log("freqMap: ", freqMap);

    for(const [k,v] of freqMap){
        if(v === n){
            return k;
        }
    }
    
};