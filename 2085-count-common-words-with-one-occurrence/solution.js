/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function(words1, words2) {

    let words1Map = new Map();
    let words2Map = new Map();

    for(i=0; i < words1.length; i++){
        if(words1Map.has(words1[i])){
            let count = words1Map.get(words1[i]);
            words1Map.set(words1[i], count + 1);
        } else {
            words1Map.set(words1[i], 1);
        }
    }
    //console.log("words1Map: ", words1Map);

    for(i=0; i < words2.length; i++){
        if(words2Map.has(words2[i])){
            let count = words2Map.get(words2[i]);
            words2Map.set(words2[i], count + 1);
        } else {
            words2Map.set(words2[i], 1);
        }
    }
    //console.log("words2Map: ", words2Map);

    let outputCount = 0;
    for(const [k,v] of words1Map){
        if(words2Map.has(k)){
            if((v === 1) && (words2Map.get(k) === 1)){
              outputCount = outputCount + 1;  
            }
        }
    }

    return outputCount;
};