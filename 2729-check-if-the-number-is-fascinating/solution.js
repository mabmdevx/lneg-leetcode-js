/**
 * @param {number} n
 * @return {boolean}
 */
var isFascinating = function(n) {

    let n2 = n * 2;
    let n3 = n * 3;

    let n123 = n.toString() + n2.toString() + n3.toString();
    //console.log("n123: ", n123);

    let nMap = new Map();
    for(i=0; i < n123.length; i++){
        let numx = parseInt(n123[i]);
        if(nMap.has(numx)){
            let count = nMap.get(numx);
            nMap.set(numx, count + 1);
        } else {
            nMap.set(numx, 1);
        }
    }
    //console.log("nMap: ", nMap);

    for(i=1; i <= 9; i++){
        if(nMap.has(0)){
            return false;
        } else {
            if(nMap.has(i) === false){
                return false;
            } else {
                if(nMap.get(i) !== 1){
                    return false;
                }
            }
        }
    }

    return true;
    
};