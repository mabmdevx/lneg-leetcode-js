/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {

    let cityMap = new Map();
    let citySet = new Set();
    for(i=0; i < paths.length; i++){
        cityMap.set(paths[i][0], paths[i][1]);
        citySet.add(paths[i][0]);
        citySet.add(paths[i][1]);
    }
    //console.log("cityMap: ", cityMap);
    //console.log("citySet: ", citySet);

    for(const k of citySet){
        if(cityMap.has(k) === false){
            return k;
        }
    }

    
};