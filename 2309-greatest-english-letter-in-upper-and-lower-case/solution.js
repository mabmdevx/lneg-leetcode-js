/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function(s) {
    
    let alphaLowerCaseSet = new Set();
    let alphaUpperCaseSet = new Set();

    for(i=0; i < s.length; i++){

        if(s[i].charCodeAt(0) >= 97 && s[i].charCodeAt(0) <= 122){
            alphaLowerCaseSet.add(s[i])
        }

        if(s[i].charCodeAt(0) >= 65 && s[i].charCodeAt(0) <= 90){
            alphaUpperCaseSet.add(s[i]);
        }
    }
    //console.log("alphaLowerCaseSet: ", alphaLowerCaseSet);
    //console.log("alphaUpperCaseSet: ", alphaUpperCaseSet);

    let commonSet = new Set();
    for(const k of alphaUpperCaseSet){
        if(alphaLowerCaseSet.has(k.toLowerCase())){
            commonSet.add(k);
        }
    }
    //console.log("commonSet: ", commonSet);

    let highestCharCode = 0;
    let highestChar = "";

    for(const k of commonSet){
        if(highestCharCode < k.charCodeAt(0)){
            highestCharCode = k.charCodeAt(0);
            highestChar = k;
        }
    }

    return highestChar;
    
};