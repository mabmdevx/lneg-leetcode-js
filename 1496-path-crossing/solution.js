/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {

    let vertical = 0;
    let horizontal = 0;
    let coordinatesSet = new Set(['0#0']);

    for(i=0; i < path.length; i++){

        if(path[i] === "N"){
            vertical = vertical + 1;
        } else if(path[i] === "S"){
            vertical = vertical - 1;
        } else if(path[i] === "E"){
            horizontal = horizontal - 1;
        } else if(path[i] === "W"){
            horizontal = horizontal + 1;
        }

        let coordinates = horizontal.toString() +"#"+ vertical.toString();

        if(coordinatesSet.has(coordinates)){
            //console.log("Repeat: ", coordinates);
            return true;
        } else {
            coordinatesSet.add(coordinates);
        }
        //console.log("coordinatesSet: ", coordinatesSet);
        
    }

    return false;
    
};