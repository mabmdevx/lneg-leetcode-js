/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {

    let finalListArr = [];

    for(i=0 ; i < nums.length; i++){

        //console.log("i: ", i);

        if(i+1 < nums.length){
            
            let freq = nums[i];
            let val = nums[i+1];

            //console.log("freq: ", freq);
            //console.log("val: ", val);
            //console.log("----");

            for(j=0; j < freq; j++){
                finalListArr.push(val);
            }
        }
        i++;
    }
    
    return finalListArr;
};