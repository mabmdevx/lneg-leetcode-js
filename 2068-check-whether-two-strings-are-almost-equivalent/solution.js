/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function(word1, word2) {

    let word1CharMap = new Map();
    for(i=0; i < word1.length; i++){
        if(word1CharMap.has(word1[i])){
            let count = word1CharMap.get(word1[i]);
            word1CharMap.set(word1[i], count + 1);
        } else {
            word1CharMap.set(word1[i], 1);
        }
    }
    //console.log("word1CharMap: ", word1CharMap);

    let word2CharMap = new Map();
    for(i=0; i < word2.length; i++){
        if(word2CharMap.has(word2[i])){
            let count = word2CharMap.get(word2[i]);
            word2CharMap.set(word2[i], count + 1);
        } else {
            word2CharMap.set(word2[i], 1);
        }
    }
    //console.log("word2CharMap: ", word2CharMap);

    let almostEquivalent = true;
    for(const [k,v] of word1CharMap){
        if(word2CharMap.has(k)){
            diff = Math.abs(word2CharMap.get(k) - v);
        } else {
            diff = v;
        }

        //console.log("diff: ", diff);

        if((diff <= 3) === false){
            almostEquivalent = false;
        }

    }

    for(const [k,v] of word2CharMap){
        if(word1CharMap.has(k)){
            diff = Math.abs(word1CharMap.get(k) - v);
        } else {
            diff = v;
        }

        //console.log("diff: ", diff);

        if((diff <= 3) === false){
            almostEquivalent = false;
        }

    }

    return almostEquivalent;
    
};