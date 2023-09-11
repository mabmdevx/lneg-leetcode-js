/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {

    let output = [];

    output[0] = first;

    for(i=1; i < encoded.length; i++){
        //console.log("i: ", i);
        output[i] = encoded[i-1] ^ output[i-1];
    }

    //console.log("i: ", i);
    output[i] = encoded[i-1] ^ output[i-1];
    
    return output;
};