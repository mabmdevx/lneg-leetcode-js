/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function(n) {

    let output = 0;

    for(i=1; i <= parseInt(n); i++){
        if( (i%3 === 0) || (i%5 === 0) || (i%7 === 0)){
            output = output + i;
        }
    }

    return output;
};