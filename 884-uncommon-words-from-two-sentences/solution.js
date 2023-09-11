/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {

    let s1WordsArr = s1.split(" ");
    //console.log("s1WordsArr: ", s1WordsArr);

    let s1WordsMap = new Map();
    for(i=0; i < s1WordsArr.length; i++){
        if(s1WordsMap.has(s1WordsArr[i])){
            let count = s1WordsMap.get(s1WordsArr[i]);
            s1WordsMap.set(s1WordsArr[i], count + 1);
        } else {
            s1WordsMap.set(s1WordsArr[i], 1);
        }
    }
    //console.log("s1WordsMap: ", s1WordsMap);
    
    let s2WordsArr = s2.split(" ");
    //console.log("s2WordsArr: ", s2WordsArr);

    let s2WordsMap = new Map();
    for(i=0; i < s2WordsArr.length; i++){
        if(s2WordsMap.has(s2WordsArr[i])){
            let count = s2WordsMap.get(s2WordsArr[i]);
            s2WordsMap.set(s2WordsArr[i], count + 1);
        } else {
            s2WordsMap.set(s2WordsArr[i], 1);
        }
    }
    //console.log("s2WordsMap: ", s2WordsMap);
    
    
    let uncommonWordsSet = new Set();
    for( const [k,v] of s1WordsMap){
        if( (s2WordsMap.has(k) === false) && (v === 1) ){
            uncommonWordsSet.add(k);
        }
    }

    for( const [k,v] of s2WordsMap){
        if( (s1WordsMap.has(k) === false) && (v === 1) ){
            uncommonWordsSet.add(k);
        }
    }

    //console.log("uncommonWordsSet: ", uncommonWordsSet);
    
    return Array.from(uncommonWordsSet);
};