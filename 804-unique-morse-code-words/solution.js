/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {

    let morseCodeArr = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    let morseCodeMap = new Map();

    let k = 0;
    for(i=97; i <= 122; i++){
        //console.log(String.fromCharCode(i));
        morseCodeMap.set(String.fromCharCode(i), morseCodeArr[k]);
        k = k + 1;
    }
    //console.log("morseCodeMap: ", morseCodeMap);

    let outputSet = new Set();
    for(i=0; i < words.length; i++){

        let eachWord = words[i];

        let mcodeStr = "";
        for(j=0; j < eachWord.length; j++){
            let eachWordChar = eachWord[j];
            let mcode = morseCodeMap.get(eachWordChar);
            mcodeStr = mcodeStr + mcode;
        }
        //console.log("mcodeStr: ", mcodeStr);
        outputSet.add(mcodeStr);
        
    }

    return outputSet.size;
    
};