/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {

    let charMap = new Map();

    // Using for loop for (a-z):
    for (i = 97; i <= 122; i++) {
        charMap.set(String.fromCharCode(i), 0);
    }
    //console.log("charMap 1: ", charMap);

    for(i=0; i < sentence.length; i++){

        if(charMap.has(sentence[i])){
            let charCount = charMap.get(sentence[i]);
            charMap.set(sentence[i], charCount + 1);
        }

    }
    //console.log("charMap 2: ", charMap);

    for(let [key,val] of charMap){
        if(val === 0){
            return false;
        }
    }

    return true;
};