/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
var checkDistances = function(s, distance) {

    let distMap = new Map();
    for(i=0; i < s.length; i++){
        let c = s[i];

        if(distMap.has(c)){
            let lastIndex = distMap.get(c);
            let diff = i - lastIndex - 1;
            distMap.set(c, diff);
        } else {
            distMap.set(c, i);
        }
    }
    console.log("distMap: ", distMap);

    let isWellSpaced = true;
    let alphabets = "abcdefghijklmnopqrstuvwxyz";

    for(i=0; i < distance.length; i++){

        let c = alphabets[i];
        let dist = 0;
        if(distMap.has(c)){
            dist = distMap.get(c);
        } else {
            // Ignore if char does not exist
            continue;
        }
        
        //console.log("i: ", i);
        //console.log("c: ", c);
        //console.log("dist: ", dist);
        //console.log("distance[i]: ", distance[i]);

        if(distance[i] !== dist){
            isWellSpaced = false;
            break;
        }
    }
    
    return isWellSpaced;
};