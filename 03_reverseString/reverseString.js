const reverseString = function(str) {
    let strArray = Array.from(str);
    let reversedStr='';
    for (let i = strArray.length-1; i >= 0; i--) {
        const element = strArray[i];
        reversedStr += element;
    }
    return reversedStr;
};

// Do not edit below this line
module.exports = reverseString;
