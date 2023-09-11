/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {

    let firstSet = new Set();

    for(i=0; i < nums.length; i++){

        let eachNumsArr = nums[i];

        let nextSet = new Set();

        for(j=0; j < eachNumsArr.length; j++){

            let elem = eachNumsArr[j];

            if(i === 0){
                firstSet.add(elem);
            } else {
                nextSet.add(elem);
            }
            
        }

        if(i !== 0 ){
            for(const k of firstSet){
                if(nextSet.has(k) === false){
                    firstSet.delete(k);
                }
            }
        }
        //console.log("firstSet: ", firstSet);

    }

    //console.log("firstSet: ", firstSet);


    let numsArr = Array.from(firstSet);
    numsArr.sort((a,b) => (a-b));

    return numsArr;
};