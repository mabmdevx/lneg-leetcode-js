/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {

    let textFreqMap = new Map();
    for(i=0; i < text.length; i++){
        if(textFreqMap.has(text[i])){
            let count = textFreqMap.get(text[i]);
            textFreqMap.set(text[i], count + 1);
        } else {
            textFreqMap.set(text[i], 1);
        }
    }
    //console.log("textFreqMap: ", textFreqMap);

    let balloonFreqMap = new Map();
    let balloonText = "balloon";
    for(i=0; i < balloonText.length; i++){
        if(balloonFreqMap.has(balloonText[i])){
            let count = balloonFreqMap.get(balloonText[i]);
            balloonFreqMap.set(balloonText[i], count + 1);
        } else {
            balloonFreqMap.set(balloonText[i], 1);
        }
    }
    //console.log("balloonFreqMap: ", balloonFreqMap);

    let count = Number.MAX_SAFE_INTEGER;

    for(const [k,v] of balloonFreqMap){
        if(balloonFreqMap.has(k) && textFreqMap.has(k)){
            let balloonFreqMapCharCount = balloonFreqMap.get(k);
            let textFreqMapCharCount = textFreqMap.get(k);

            let div = textFreqMapCharCount / balloonFreqMapCharCount;
            count = Math.floor(Math.min(count, div));
        } else {
            count = 0;
            break;
        }
    }
    
    return count;
};