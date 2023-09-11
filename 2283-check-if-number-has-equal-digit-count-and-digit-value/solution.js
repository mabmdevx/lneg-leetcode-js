/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function(num) {

    let numsMap = new Map();
    for(i=0; i < num.length; i++){
        if(numsMap.has(parseInt(num[i]))){
            let count = numsMap.get(parseInt(num[i]));
            numsMap.set(parseInt(num[i]), count + 1);
        } else {
            numsMap.set(parseInt(num[i]), 1);
        }
    }
    //console.log("numsMap: ", numsMap);

    let output = true;
    for(i=0; i < num.length; i++){

        let numx = parseInt(num[i]);

        //console.log("i: ", i);
        //console.log("numx: ", parseInt(numx));
        //console.log("numsMap.get(i): ", numsMap.get(i));

        if(numsMap.has(i)){

            if( (numx === numsMap.get(i)) === false ){
                output = false;
                break;
            }

        } else {
            if( (numx === 0) === false){
                output = false;
                break;
            }
        }
    }
    
    return output;
};