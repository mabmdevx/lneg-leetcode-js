/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {

    let maxNumOfCandies = 0;

    for(i=0; i < candies.length; i++){
        if(maxNumOfCandies < candies[i]){
            maxNumOfCandies = candies[i];
        }
    }
    //console.log("maxNumOfCandies: ", maxNumOfCandies);

    let ansArr = [];
    for(i=0; i < candies.length; i++){
        if((candies[i] + extraCandies) >= maxNumOfCandies){
            ansArr.push(true);
        } else {
            ansArr.push(false);
        }
    }
    
    return ansArr;
};