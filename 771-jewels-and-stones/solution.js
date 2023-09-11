/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {

    let output = 0;

    let jewelsSet = new Set();
    for(i=0; i < jewels.length; i++){
        if(jewelsSet.has(jewels[i]) === false){
            jewelsSet.add(jewels[i]);
        }
    }

    for(i=0; i < stones.length; i++){
        if(jewelsSet.has(stones[i])){
            output = output + 1;
        }
    }
    
    return output;
};