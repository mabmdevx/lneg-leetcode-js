/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {

    let sCharMap = new Map();
    for(i=0; i < s.length; i++){
        if(sCharMap.has(s[i])){
            let count = sCharMap.get(s[i]);
            sCharMap.set(s[i], count + 1);
        } else {
            sCharMap.set(s[i], 1);
        }
    }
    //console.log("sCharMap: ", sCharMap);

    let tCharMap = new Map();
    for(i=0; i < t.length; i++){
        if(tCharMap.has(t[i])){
            let count = tCharMap.get(t[i]);
            tCharMap.set(t[i], count + 1);
        } else {
            tCharMap.set(t[i], 1);
        }
    }
    //console.log("tCharMap: ", tCharMap);
    
    for(const [k,v] of tCharMap){
        if( ( (sCharMap.has(k) === true) && (sCharMap.get(k) >= v) ) === false){
            return k;
        }
    }
};