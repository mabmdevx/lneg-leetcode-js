/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {

    let targetStackArr = [];
    let tempStackArr = [];

    for(i=0; i < nums.length; i++){
        //console.log("index: ", index[i]);
        //console.log("nums[i]: ", nums[i]);

        let currentIndex = index[i];

        //console.log("targetStackArr[currentIndex]: ", targetStackArr[currentIndex]);

        if(targetStackArr[currentIndex] === undefined){
            targetStackArr[currentIndex] = nums[i];
            //console.log("targetStackArr 1: ", targetStackArr);
        } else {
            // Eject from targetStack and save in tempStack
            for(j=targetStackArr.length-1; j >= currentIndex; j--){
                tempStackArr.push(targetStackArr[j]);
                targetStackArr.pop();
            }
            //console.log("targetStackArr 2: ", targetStackArr);
            //console.log("tempStackArr 1: ", tempStackArr);

            // Enter new value
            targetStackArr[currentIndex] = nums[i];

            //console.log("targetStackArr 3: ", targetStackArr);
            //console.log("tempStackArr 2: ", tempStackArr);

            // Restore from tempStack to targetStack
            while(tempStackArr.length > 0){
                let valx = tempStackArr.pop();
                targetStackArr.push(valx);
            }
            //console.log("targetStackArr 4: ", targetStackArr);
            //console.log("tempStackArr 3: ", tempStackArr);
        }

        //console.log("targetStackArr last: ", targetStackArr);
        //console.log("tempStackArr last: ", tempStackArr);
        //console.log("-----");
    }
    
   return targetStackArr;
};