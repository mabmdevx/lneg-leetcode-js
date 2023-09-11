/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {

    let charMap = new Map();
    for(i=0; i < chars.length; i++){
        if(charMap.has(chars[i])){
            let count = charMap.get(chars[i]);
            charMap.set(chars[i], count + 1);
        } else {
            charMap.set(chars[i], 1);
        }
    }
    //console.log("charMap: ", charMap);

    let goodWordsArr = [];

    for(i=0 ; i < words.length; i++){

        let eachWord = words[i];

        let eachWordMap = new Map();
        for(j=0; j < eachWord.length; j++){
            if(eachWordMap.has(eachWord[j])){
                let count = eachWordMap.get(eachWord[j]);
                eachWordMap.set(eachWord[j], count + 1);
            } else {
                eachWordMap.set(eachWord[j], 1);
            }
        }
        //console.log("eachWordMap: ", eachWordMap);

        let isGood = true;
        for(const [k,v] of eachWordMap){
            if( (charMap.has(k) && charMap.get(k) >= v) === false){
                isGood = false;
            }
        }

        if(isGood === true){
            goodWordsArr.push(eachWord);
        }
    }
    //console.log("goodWordsArr: ", goodWordsArr)

    let output = 0;
    for(i=0; i < goodWordsArr.length; i++){
        output = output + goodWordsArr[i].length;
    }

    return output;
    
};