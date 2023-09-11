/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {

    let allNumsSet = new Set();
    for(i=0; i < nums1.length; i++){
        allNumsSet.add(nums1[i]);
    }
    for(i=0; i < nums2.length; i++){
        allNumsSet.add(nums2[i]);
    }
    for(i=0; i < nums3.length; i++){
        allNumsSet.add(nums3[i]);
    }
    //console.log("allNumsSet: ", allNumsSet);

    let outputArr = [];
    let checkExistsCount = 0;

    for(const k of allNumsSet){

        if(nums1.includes(k)){
            checkExistsCount = checkExistsCount + 1;
        }
        if(nums2.includes(k)){
            checkExistsCount = checkExistsCount + 1;
        }
        if(nums3.includes(k)){
            checkExistsCount = checkExistsCount + 1;
        }

        //console.log("k: "+ k + " - checkExistsCount: " + checkExistsCount)

        if(checkExistsCount >= 2){
            outputArr.push(k);
        }

        checkExistsCount = 0;

    }

    return outputArr;
};