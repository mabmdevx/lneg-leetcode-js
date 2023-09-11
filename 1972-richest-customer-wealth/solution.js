/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {

    let maxWealth = 0;

    for(i=0; i < accounts.length; i++){
        let sumEachWealth = 0;
        for(j=0; j < accounts[i].length; j++){
            sumEachWealth = sumEachWealth + accounts[i][j];
        }
        if(maxWealth < sumEachWealth){
            maxWealth = sumEachWealth;
        }
    }
    
    return maxWealth;
};