/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {

    let uniqEmailSet = new Set();

    for(i=0; i < emails.length; i++){
        
        let eachEmailAddress = emails[i];
        let eachEmailAddressParts = eachEmailAddress.split("@");
        //console.log("eachEmailAddressParts: ", eachEmailAddressParts)

        let uniqEmailFirstPart = "";

        for(j=0; j < eachEmailAddressParts[0].length; j++){
            if(eachEmailAddressParts[0][j] !== "."){
                if(eachEmailAddressParts[0][j] === "+"){
                    break;
                }
                uniqEmailFirstPart = uniqEmailFirstPart + eachEmailAddressParts[0][j];
            }
        }        

        let uniqEmail = uniqEmailFirstPart +"@"+ eachEmailAddressParts[1];
        //console.log("uniqEmail: ", uniqEmail);
        
        uniqEmailSet.add(uniqEmail);

    }

    //console.log("uniqEmailSet: ", uniqEmailSet)
    
    return uniqEmailSet.size;
};