/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function(items1, items2) {

    let itemsMap = new Map();

    for(i=0; i < items1.length; i++){
        if(itemsMap.has(items1[i][0])){
            let val = itemsMap.get(items1[i][0]);
            itemsMap.set(items1[i][0], val + items1[i][1]);
        } else {
            itemsMap.set(items1[i][0], items1[i][1]);
        }
    }
    //console.log("itemsMap: ", itemsMap);
    
    for(i=0; i < items2.length; i++){
        if(itemsMap.has(items2[i][0])){
            let val = itemsMap.get(items2[i][0]);
            itemsMap.set(items2[i][0], val + items2[i][1]);
        } else {
            itemsMap.set(items2[i][0], items2[i][1]);
        }
    }
    //console.log("itemsMap: ", itemsMap);

    
    let keyArr = [];
    for(const [k,v] of itemsMap){
        keyArr.push(k);
    }
    keyArr.sort((a,b) => (a-b));
    //console.log("keyArr: ", keyArr);

    let outputArr = [];
    for(i=0; i < keyArr.length; i++){

        let val = itemsMap.get(keyArr[i]);
        let eachArr = [];
        eachArr[0] = keyArr[i];
        eachArr[1] = val;

        outputArr.push(eachArr);
    }

    return outputArr;
};