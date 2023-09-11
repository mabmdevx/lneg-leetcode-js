/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {

    let candySet = new Set();
    for(i=0; i < candyType.length; i++){
        candySet.add(candyType[i]);
    }
    //console.log("candyType unique: ", candySet);

    let canEat = candyType.length / 2;
    //console.log("canEat: ", canEat);

    let candySetSize = candySet.size;
    //console.log("candySetSize: ", candySet.size);

    return Math.min(candySetSize, canEat);
};