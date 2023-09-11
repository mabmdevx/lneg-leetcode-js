/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {

    let outputSet = new Set();

    for(i=0; i < words.length; i++){
        for(j=0; j < words.length; j++){
            if(i !== j && words[i].includes(words[j]) ){
                outputSet.add(words[j]);
            }
        }
    }
    
    return Array.from(outputSet);
};