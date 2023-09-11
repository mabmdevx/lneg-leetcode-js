/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function(nums1, nums2) {

    let numsMap = new Map();

    for(i=0; i < nums1.length; i++){
        if(numsMap.has(parseInt(nums1[i][0]))){
            let count = numsMap.get(parseInt(nums1[i][0]));
            numsMap.set(parseInt(nums1[i][0]), parseInt(count + nums1[i][1]));
        } else {
            numsMap.set(parseInt(nums1[i][0]), parseInt(nums1[i][1]));
        }
    }
    //console.log("numsMap: ", numsMap);

    for(i=0; i < nums2.length; i++){
        if(numsMap.has(parseInt(nums2[i][0]))){
            let count = numsMap.get(parseInt(nums2[i][0]));
            numsMap.set(parseInt(nums2[i][0]), parseInt(count + nums2[i][1]));
        } else {
            numsMap.set(parseInt(nums2[i][0]), parseInt(nums2[i][1]));
        }
    }
    //console.log("numsMap: ", numsMap);

    let numsArr = [];
    for(const [k,v] of numsMap){
        numsArr.push(k);
    }
    numsArr.sort((a,b) => (a-b));
    //console.log("numsArr: ", numsArr);

    nums2Map = new Map();
    for(i=0; i < numsArr.length; i++){
        nums2Map.set(numsArr[i], numsMap.get(numsArr[i]));
    }

    //console.log("numsMap: ", numsMap);

    let valArr = [];
    let opArr = [];
    for(const [k,v] of nums2Map){
        valArr.push(k);
        valArr.push(v);
        
        opArr.push(valArr);
        valArr = [];
    }
    //console.log("opArr: ", opArr);

    return opArr;
};