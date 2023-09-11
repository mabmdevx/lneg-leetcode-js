/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {

    let prod = 1;
    for(i=0; i < nums.length; i++){

        if(nums[i] === 0){
            prod = 0;
            break;
        } else {
            prod = prod * nums[i];
        }
        
    }
    //console.log("prod: ", prod);

    if(prod === 0){
        return 0;
    } else if (prod > 0){
        return 1;
    } else {
        return -1;
    }
    
};