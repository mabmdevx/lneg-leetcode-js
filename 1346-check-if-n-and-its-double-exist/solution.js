/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {

    let arrMap = new Map();
    for(i=0; i < arr.length; i++){
        if(arrMap.has(arr[i])){
            let count = arrMap.get(arr[i]);
            arrMap.set(arr[i], count + 1);
        } else {
            arrMap.set(arr[i], 1);
        }
    }
    //console.log("arrMap: ", arrMap);

    for(i=0; i < arr.length; i++){
        let double = arr[i] * 2;
        if((arr[i] !== 0) && (double !== 0)){
            if(arrMap.has(double)){
                return true;
            }
        } else {
            if(arr[i] === 0 && double === 0){
                if(arrMap.has(double) && (arrMap.get(double) > 1)){
                    return true;
                }
            }
        }
    }
    return false;
    
};