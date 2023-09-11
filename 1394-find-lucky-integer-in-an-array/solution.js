/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {

    let freqMap = new Map();
    for(i=0; i < arr.length; i++){
        if(freqMap.has(arr[i])){
            let count = freqMap.get(arr[i]);
            freqMap.set(arr[i], count + 1);
        } else {
            freqMap.set(arr[i], 1);
        }
    }
    //console.log("freqMap: ", freqMap);

    let luckyNum = -1;
    for(const [k,v] of freqMap){
        if((k === v) && (k > luckyNum)){
            luckyNum = k;
        }
    }

    return luckyNum;
 
};