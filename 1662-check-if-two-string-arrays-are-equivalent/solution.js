/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {

    let word1Str = "";
    for(i=0 ; i < word1.length; i++){
        word1Str = word1Str + word1[i];
    }

    let word2Str = "";
    for(i=0 ; i < word2.length; i++){
        word2Str = word2Str + word2[i];
    }

    if(word1Str === word2Str){
        return true;
    } else {
        return false;
    }
    
};