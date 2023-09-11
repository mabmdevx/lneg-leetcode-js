/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {

    let keyHashSet = new Set();
    for(i=0; i < key.length; i++){
        if(key[i] !== " "){
            keyHashSet.add(key[i]);
        }
    }
    //console.log("keyHashSet: ", keyHashSet);

    let alphabets = "abcdefghijklmnopqrstuvwxyz";
    let alphaMap = new Map();
    const keyHashSetValues = keyHashSet.values();
    for(i=0; i < alphabets.length; i++){
        alphaMap.set(keyHashSetValues.next().value, alphabets[i]);
    }
    //console.log("alphaMap: ", alphaMap);

    let output = "";
    for(i=0; i < message.length; i++){
        if(message[i] !== " "){
            let val = alphaMap.get(message[i]);
            output = output + val;
        } else {
            output = output + " ";
        }
        
    }    

    return output;
};