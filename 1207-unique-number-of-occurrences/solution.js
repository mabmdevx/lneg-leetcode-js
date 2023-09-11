/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {

    let occMap = new Map();

    for(i=0; i < arr.length; i++){
        if(occMap.has(arr[i])){
            let count = occMap.get(arr[i]);
            occMap.set(arr[i], count + 1);
        } else {
            occMap.set(arr[i], 1);
        }
    }

    let occCheckSet = new Set();
    let occCheckArr = [];

    for(const [k,v] of occMap){
        occCheckSet.add(v);
        occCheckArr.push(v);    
    }

    if(occCheckSet.size === occCheckArr.length){
        return true;
    } else {
        return false;
    }
    
};