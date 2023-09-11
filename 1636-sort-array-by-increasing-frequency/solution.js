/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {

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

    let invertedNumsMap = new Map();
    let allFreqSet = new Set();
    for(const [k,v] of numsMap){
        if(invertedNumsMap.has(v) === false){
            let keyArr = [];
            keyArr.push(k);
            invertedNumsMap.set(v, keyArr);
        } else {
            let keyArr = invertedNumsMap.get(v);
            keyArr.push(k);
            invertedNumsMap.set(v, keyArr);
        }
        allFreqSet.add(v);
    }
    //console.log("invertedNumsMap: ", invertedNumsMap);
    //console.log("allFreqSet: ", allFreqSet);

    let allFreqArr = Array.from(allFreqSet);
    allFreqArr.sort((a,b) => (a-b));

    //console.log("allFreqArr: ", allFreqArr);

    let output = [];
    for(i=0; i < allFreqArr.length; i++){
        let eachFreq = allFreqArr[i];
        //console.log("eachFreq: ", eachFreq);
        
        let eachNum = invertedNumsMap.get(eachFreq);
        eachNum.sort((a,b) => (b-a));
        //console.log("eachNum: ", eachNum);
        
        for(j=0; j < eachNum.length; j++){
            for(k=0; k < eachFreq; k++){
                output.push(eachNum[j]);
            }
        }
    }

    return output;
};