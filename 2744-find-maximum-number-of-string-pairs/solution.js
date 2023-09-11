/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {

    let wordsMap = new Map();
    let count = 0;

    for(i=0; i < words.length; i++){
        if(wordsMap.has(words[i])){
            let count = wordsMap.get(words[i]);
            wordsMap.set(words[i], count + 1);
        } else {
            wordsMap.set(words[i], 1);
        }
    }
    //console.log("wordsMap: ", wordsMap);

    for(const [k,v] of wordsMap){
        let pair = k[1] + k[0];
        //console.log("pair: ", pair);

        if(k === pair){
            if(wordsMap.has(pair) && wordsMap.get(pair) > 1){
                count = count + 1;
                wordsMap.delete(pair);
                //console.log("wordsMap after delete 1: ", wordsMap);
            }
        } else if(wordsMap.has(pair)){
            count = count + 1;
            wordsMap.delete(pair);
            //console.log("wordsMap after delete 2: ", wordsMap);
        }
        
    }
    //console.log("wordsMap: ", wordsMap);

    return count;
};