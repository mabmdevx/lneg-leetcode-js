/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {

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

    let index = 0;
    for(i=0; i < s.length; i++){
        if(sCharMap.get(s[i]) === 1){
           return index; 
        }
        index = index + 1;
    }
    return -1;
    
};