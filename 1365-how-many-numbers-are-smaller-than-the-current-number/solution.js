/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {

    let countOfSmallerNums = 0;
    let ansArr = [];

    for(i=0; i < nums.length; i++){

        countOfSmallerNums = 0;
        for(j=0; j < nums.length; j++){
            if(i===j){
                continue;
            }
            if(nums[i] > nums[j]){
                countOfSmallerNums++;
            }
        }
        ansArr.push(countOfSmallerNums);
    }

    return ansArr;
};