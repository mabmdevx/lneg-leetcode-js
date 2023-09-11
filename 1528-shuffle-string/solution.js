/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {

    let shuffleMap = new Map();
    for(i=0; i < s.length; i++){
        shuffleMap.set(indices[i], s[i]);
    }
    //console.log("shuffleMap: ", shuffleMap);

    let output = "";
    for(i=0; i < s.length; i++){
        output = output + shuffleMap.get(i);
    }
    
    return output;
};