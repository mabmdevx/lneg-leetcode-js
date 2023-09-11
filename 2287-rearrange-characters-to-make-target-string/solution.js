/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function(s, target) {

    if(target.length > s.length){
        return 0;
    } else {
        let strCharMap = new Map();
        for(i=0; i < s.length; i++){
            if(strCharMap.has(s[i])){
                let count = strCharMap.get(s[i]);
                strCharMap.set(s[i], count + 1);
            } else {
                strCharMap.set(s[i], 1);
            }
        }
        //console.log("strCharMap: ", strCharMap);


        let targetCharMap = new Map();
        for(i=0; i < target.length; i++){
            if(targetCharMap.has(target[i])){
                let count = targetCharMap.get(target[i]);
                targetCharMap.set(target[i], count + 1);
            } else {
                targetCharMap.set(target[i], 1);
            }
        }
        //console.log("targetCharMap: ", targetCharMap);


        let minCharMap = new Map();
        for(const [k,v] of targetCharMap){
            if(strCharMap.has(k)){
                let charCount = strCharMap.get(k);
                let charTimes = Math.floor(charCount / v);
                minCharMap.set(k, charTimes);
            } else {
                minCharMap.set(k, 0);
            }
        }
        //console.log("minCharMap: ", minCharMap);

        let minVal = Number.MAX_SAFE_INTEGER;
        for(const [k,v] of minCharMap){
            if(v < minVal){
                minVal = v;
            }
        }
        //console.log("minVal: ", minVal); 

        return minVal;
    }
};