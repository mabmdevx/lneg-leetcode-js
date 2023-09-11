/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {

    let onlyLettersArr = [];

    for(i=0; i < s.length; i++){
        let charx = s[i];
        if( (charx.charCodeAt(0) >= 65 && charx.charCodeAt(0) <= 90) || 
            (charx.charCodeAt(0) >= 97 && charx.charCodeAt(0) <= 122)
        ){
            onlyLettersArr.push(charx);
        }
    }
    //console.log("onlyLettersArr: ", onlyLettersArr);

    let reversed = "";
    for(i=onlyLettersArr.length-1; i>=0; i--){
        reversed = reversed + onlyLettersArr[i];
    }
    //console.log("reversed: ", reversed);

    let finalStr = "";
    let j = 0;
    for(i=0; i < s.length; i++){
        let charx = s[i];
        if( (charx.charCodeAt(0) >= 65 && charx.charCodeAt(0) <= 90) || 
            (charx.charCodeAt(0) >= 97 && charx.charCodeAt(0) <= 122)
        ){
            finalStr = finalStr + reversed[j];
            j = j + 1;
        } else {
            finalStr = finalStr + s[i];
        }
    }

    return finalStr;
    
};