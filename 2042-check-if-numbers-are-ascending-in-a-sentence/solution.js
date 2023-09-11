/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function(s) {

    let temp = 0;
    let flag = true;
    let strArr = s.split(" ");
    //console.log("strArr: ", strArr);

    let numArr = [];
    for(i=0; i < strArr.length; i++){
        if(isNaN(strArr[i]) === false && (strArr[i] !== " ")){
            numArr.push(parseInt(strArr[i]));
        }
    }
    //console.log("numArr:", numArr)

    for(i=0; i < numArr.length; i++){
        //console.log("numArr[i]: ", numArr[i]);
        //console.log("numArr[i+1]: ", numArr[i+1]);

        if(i+1 <= numArr.length){
            if((numArr[i+1] < numArr[i]) || (numArr[i] === numArr[i+1])){
                flag = false;
                break;
            }
        }
    }


    return flag;
    
};