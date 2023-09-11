/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {

    let peopleMap = new Map();
    
    for(i=0; i < names.length; i++){
        peopleMap.set(heights[i], names[i]);
    }
    //console.log("peopleMap: ", peopleMap);

    heights.sort((a,b) => (a-b));
    //console.log("heights Sorted: ", heights);

    let outputArr = [];
    for(i=heights.length-1; i >=0 ; i--){
        outputArr.push(peopleMap.get(heights[i]));
    }

    return outputArr;
};