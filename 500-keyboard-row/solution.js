/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {

    let row1Set = new Set(['q','w','e','r','t','y','u','i','o','p']);
    let row2Set = new Set(['a','s','d','f','g','h','j','k','l']);
    let row3Set = new Set(['z','x','c','v','b','n','m']);

    //console.log("row1Set: ", row1Set);
    //console.log("row2Set: ", row2Set);
    //console.log("row3Set: ", row3Set);

    let outputArr = [];

    for(i=0; i < words.length; i++){
    
        let eachWord = words[i];

        let canBeTypedRow1 = true;
        let canBeTypedRow2 = true;
        let canBeTypedRow3 = true;

        for(j=0; j < eachWord.length; j++){

            let eachChar = words[i][j].toLowerCase();
            //console.log("eachChar: ", eachChar);

            if(row1Set.has(eachChar) === false){
                canBeTypedRow1 = false;
            }
            if(row2Set.has(eachChar) === false){
                canBeTypedRow2 = false;
            }
            if(row3Set.has(eachChar) === false){
                canBeTypedRow3 = false;
            }
        }
        
        //console.log("eachWord: ", eachWord);
        //console.log("canBeTypedRow1: ", canBeTypedRow1);
        //console.log("canBeTypedRow2: ", canBeTypedRow2);
        //console.log("canBeTypedRow3: ", canBeTypedRow3);
        //console.log("---");

        if(canBeTypedRow1 === true || canBeTypedRow2 === true || canBeTypedRow3 === true){
            outputArr.push(eachWord);
        }
    }
    //console.log("words: ", words);

    return outputArr;
};