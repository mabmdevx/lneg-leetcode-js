/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {

    let charMap = new Map();
    for(i=0; i < s.length; i++){
        if(charMap.has(s[i])){
            let count = charMap.get(s[i]);
            charMap.set(s[i], count + 1);
        } else {
            charMap.set(s[i], 1);
        }

        if(charMap.get(s[i]) === 2){
            return s[i];
        }
    }
    //console.log("charMap: ", charMap);
    
};