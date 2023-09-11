/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {

    let nums1DiffArr = [];
    for(i=0; i < nums1.length; i++){
        if(nums2.includes(nums1[i]) === false && nums1DiffArr.includes(nums1[i]) === false){
            nums1DiffArr.push(nums1[i]);
        }
    }
    //console.log("nums1DiffArr: ", nums1DiffArr);

    let nums2DiffArr = [];
    for(i=0; i < nums2.length; i++){
        if(nums1.includes(nums2[i]) === false && nums2DiffArr.includes(nums2[i]) === false){
            nums2DiffArr.push(nums2[i]);
        }
    }
    //console.log("nums2DiffArr: ", nums2DiffArr);


    let outputArr = [];
    outputArr.push(nums1DiffArr);
    outputArr.push(nums2DiffArr);
    
    return outputArr;
};