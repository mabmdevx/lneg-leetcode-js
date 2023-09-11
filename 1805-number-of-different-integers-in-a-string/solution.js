/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function(word) {

    let eachNum = "";
    let numArr = [];

    for(i=0; i < word.length; i++){
        if(isNaN(word[i]) === false){
            //console.log("word[i]: " + word[i] + " is a number.")
 
            eachNum = eachNum + word[i];
            
        } else {
            //console.log("word[i]: " + word[i] + " is a char.")

            if(eachNum !== ""){
                numArr.push(BigInt(eachNum, 10));
                //console.log(BigInt(eachNum, 10) + " pushed to array.")
                eachNum = "";
                
            }
        }
        
    }
    if(eachNum !== ""){
        numArr.push(BigInt(eachNum, 10));
        //console.log(BigInt(eachNum, 10) + " pushed to array.")
        eachNum = "";
        
    }
    //console.log("numArr: ", numArr);

    let numSet = new Set();
    for(i=0; i < numArr.length; i++){
        numSet.add(numArr[i]);
    }
    
    return numSet.size;
};