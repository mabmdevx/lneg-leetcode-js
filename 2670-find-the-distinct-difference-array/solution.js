/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distinctDifferenceArray = function(nums) {

    let distinctPrefixSet = new Set();
    let distinctSuffixSet = new Set();

    let outputArr = [];
    for(i=0; i < nums.length; i++){

        distinctPrefixSet.add(nums[i]);

        for(j=i+1; j < nums.length; j++){
            distinctSuffixSet.add(nums[j]);
        }
        let outputDiff = distinctPrefixSet.size - distinctSuffixSet.size;
        //console.log("outputDiff: ", outputDiff);
        outputArr.push(outputDiff);

        distinctSuffixSet = new Set();

    }
    
    return outputArr;
};