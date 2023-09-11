/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {

    let ansArr = [];
    let nums1Arr = [];
    let nums2Arr = [];

    for(i=0; i < nums.length/2; i++){
        nums1Arr[i] = nums[i];
    }

    let index = 0;
    for(i=nums.length/2; i < nums.length; i++){
        nums2Arr[index] = nums[i];
        index = index + 1;
    }

    for(i=0; i < nums1Arr.length; i++){
        ansArr.push(nums1Arr[i]);
        ansArr.push(nums2Arr[i]);
    }

    //console.log("nums1Arr: ", nums1Arr);
    //console.log("nums2Arr: ", nums2Arr);

    //console.log("ansArr: ", ansArr);

    return ansArr;
    
};