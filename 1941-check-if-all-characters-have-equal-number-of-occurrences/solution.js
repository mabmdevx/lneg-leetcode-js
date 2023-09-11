/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {

    let charFreqMap = new Map();
    for(i=0; i < s.length; i++){
        if(charFreqMap.has(s[i]) === false){
            charFreqMap.set(s[i], 1);
        } else {
            let count = charFreqMap.get(s[i]);
            charFreqMap.set(s[i], count + 1);
        }
    }
    //console.log("charFreqMap: ", charFreqMap);

    let checkEqualOccurenceSet = new Set();
    for(const [k,v] of charFreqMap){
        if(checkEqualOccurenceSet.has(v) === false){
            checkEqualOccurenceSet.add(v);
        }
    }
    //console.log("checkEqualOccurenceSet: ", checkEqualOccurenceSet);

    if(checkEqualOccurenceSet.size === 1){
        return true;
    }
    return false;
    
};