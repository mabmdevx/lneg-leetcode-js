/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {

    let output = 0;

    for(i=0; i < items.length; i++){
        if(ruleKey === "type"){
            if(ruleValue === items[i][0]){
                output++;
            }
        }
        if(ruleKey === "color"){
            if(ruleValue === items[i][1]){
                output++;
            }
        }
        if(ruleKey === "name"){
            if(ruleValue === items[i][2]){
                output++;
            }
        }
    }

    return output;
    
};