/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {

    let wordsArr = [];

    let eachWord = "";
    for(i=0; i < s.length; i++){
        if(s[i] !== " "){
            eachWord = eachWord + s[i];
        } else {
            wordsArr.push(eachWord);
            eachWord = "";
        }   
    }
    wordsArr.push(eachWord);

    //console.log("wordsArr: ", wordsArr)

    let output = "";
    for(i = 0; i < k; i++){
        output = output + wordsArr[i];
        if(i < k - 1){
            output = output + " ";
        }
    }

    return output;
    
};