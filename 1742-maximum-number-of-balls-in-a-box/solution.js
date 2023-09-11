/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function(lowLimit, highLimit) {

    let eachBall = 0;
    let boxArr = [];
    let boxNum=1;

    for(i=lowLimit; i <= highLimit; i++){
        eachBall = i.toString();
        //console.log("eachBall: ", eachBall);
        boxNum = boxNum + 1;

        let sum = 0;
        for(j=0; j < eachBall.length; j++){
            sum = sum + parseInt(eachBall[j]);
        }
        //console.log("sum: ", sum);

        if(boxArr[sum] === undefined){
            boxArr[sum] = 1;
        } else {
            boxArr[sum] = boxArr[sum] + 1;
        }
    }
    
    //console.log("boxArr: ", boxArr);

    boxArr.sort((a,b) => (b-a));
    //console.log("boxArr sorted: ", boxArr);

    return boxArr[0];
};