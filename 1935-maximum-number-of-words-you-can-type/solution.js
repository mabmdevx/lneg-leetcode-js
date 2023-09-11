/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {

    let lettersSet = new Set();
    for(i=0; i < brokenLetters.length; i++){
        lettersSet.add(brokenLetters[i]);
    }
    //console.log("lettersSet: ", lettersSet);

    let wordsArr = text.split(" ");
    //console.log("wordsArr: ", wordsArr);

    let outputCount = 0;
    for(i=0; i < wordsArr.length; i++){
        let canTypeWord = true;
        for(const k of lettersSet){

            //console.log("k: ", k)
            //console.log("wordsArr[i]: ", wordsArr[i]);

            if(wordsArr[i].includes(k)){
                canTypeWord = false;
            }
        }
        if(canTypeWord === true){
            outputCount = outputCount + 1;
            //console.log("outputCount: ", outputCount);
        }
    }
    
    return outputCount;
};