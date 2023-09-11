/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {

    let intersectionSet = new Set();
    let nums1Set = new Set();

    for(i=0; i < nums1.length; i++){
        nums1Set.add(nums1[i]);
    }
    for(i=0; i < nums2.length; i++){
        if(nums1Set.has(nums2[i])){
            intersectionSet.add(nums2[i]);
        }
    }

    return Array.from(intersectionSet);
    
};