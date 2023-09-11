/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {

    let maxNumOfWords = 0;

    for(i=0; i < sentences.length; i++){

        let eachSentence = sentences[i];
        let eachSentenceCountWords = 0;
        for(j=0; j < eachSentence.length; j++){
            
            if(eachSentence[j] === " "){
                eachSentenceCountWords = eachSentenceCountWords + 1;
            }

        }

        eachSentenceCountWords = eachSentenceCountWords + 1;  

        if(maxNumOfWords < eachSentenceCountWords){
            maxNumOfWords = eachSentenceCountWords;
        }

    }

    return maxNumOfWords;
    
};