/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function(matrix) {

    let len = matrix.length;
    //console.log("len: ", len)

    for(i=0; i < matrix.length; i++){

        let rowElemSet = new Set();
        let colElemSet = new Set();

        for(j=0; j < matrix[i].length; j++){

            let rowElem = matrix[i][j];
            rowElemSet.add(rowElem);

            let colElem = matrix[j][i];
            colElemSet.add(colElem);

        }
        //console.log("rowElemSet: ", rowElemSet);
        //console.log("colElemSet: ", colElemSet);

        for(k=1; k <= len; k++){
            if(rowElemSet.has(k) === false || colElemSet.has(k) === false){
                //console.log("k not found: ", k)
                return false;
            }
        }

    }
    
    return true;
};