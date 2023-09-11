/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {

    let minVal = Number.MAX_SAFE_INTEGER;
    //console.log("minVal: ", minVal);

    let outputCount = 0;
   
    while(minVal !== 0){

        let index = 0;
        while(index < nums.length){

            eachVal = nums[index];
            //console.log("eachVal: ", eachVal);
            
            if(eachVal !== 0){
                if(minVal > eachVal){
                    minVal = eachVal;
                }
            }
            
            //console.log("index: ", index);
            index = index + 1;
        }
        //console.log("minVal end of loop: ", minVal);

        if((minVal === Number.MAX_SAFE_INTEGER) && (index >= nums.length-1)){
            break;
        }

        for(i=0; i < nums.length; i++){
            if(nums[i] !== 0){
                nums[i] = nums[i] - minVal;
            }
        }
        //console.log("nums: ", nums);

        outputCount = outputCount + 1;

        minVal = Number.MAX_SAFE_INTEGER;

    }

    return outputCount;
    
};