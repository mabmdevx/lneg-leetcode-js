/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function(rings) {

    let ringColor = "";
    let rodNum = -1;

    let maxRod = Number.MIN_SAFE_INTEGER;
    let numOfRings = rings.length/2;

    for(i=0; i < rings.length; i++){

        rodNum = parseInt(rings[i+1]);

        if(rodNum > maxRod){
            maxRod = rodNum;
        }
        i++;
    }
    maxRod = maxRod + 1;

    //console.log("maxRod: ", maxRod);
    //console.log("numOfRings: ", numOfRings);
    //console.log("----");

    let rodMap = new Map();
    for(i=0; i < maxRod; i++){
        let newArr = [];
        rodMap.set(i, newArr);
    }
    //console.log("rodMap: ", rodMap);

    for(i=0; i < rings.length; i++){

        ringColor = rings[i];
        rodNum = parseInt(rings[i+1]);

        //console.log("ringColor: ", ringColor);
        //console.log("rodNum: ", rodNum);

        let eachRodArr = [];
        eachRodArr = rodMap.get(rodNum);
        eachRodArr.push(ringColor);
        //console.log("eachRodArr" + rodNum + ": ", eachRodArr)

        rodMap.set(rodNum, eachRodArr);

        //console.log("----");

        i++;
    }
    //console.log("rodMap: ", rodMap);

    let output = 0;
    for( const[k,v] of rodMap){
        let eachRodContents = v;
        if(v.includes("B") && v.includes("G") && v.includes("R")){
            output = output + 1;
        }
    }

    return output;
};