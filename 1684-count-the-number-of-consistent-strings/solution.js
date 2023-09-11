/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {

    let allowedHashSet = new Set();
    for(i=0; i < allowed.length; i++){
        if(allowedHashSet.has(allowed[i]) === false){
            allowedHashSet.add(allowed[i]);
        }
    }
    //console.log("allowedHashSet: ", allowedHashSet);

    let consistentWordsCount = 0;
    for(i=0; i < words.length; i++){
        let eachWord = words[i];
        //console.log("eachWord: ", eachWord);

        let isConsistentWord = false;
        for(j=0; j < eachWord.length; j++){
            if(allowedHashSet.has(eachWord[j]) === false){
                isConsistentWord = false;
                break;
            } else {
                isConsistentWord = true;
            }
        }

        if(isConsistentWord === true){
            consistentWordsCount = consistentWordsCount + 1;
        }


    }
    
    return consistentWordsCount;
};