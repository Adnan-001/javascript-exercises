

function removeNonAlphabets(string) {
    let resStr = '';
    for (let i = 0; i < string.length; i++) {
        let element = string.charAt(i);
        if ((element >= 'a' && element <= 'z') 
            || (element>='A' && element<='Z')) 
        {
            element = element.toLowerCase();
            resStr += element;
        }
    }
    return resStr;
}

const palindromes = function (string) {
    const alphabetsList = removeNonAlphabets(string);

    let startInd=0, lastInd = alphabetsList.length-1, startChar, lastChar;

    while (startInd <= lastInd) {

        startChar = alphabetsList[startInd];
        lastChar = alphabetsList.charAt(lastInd);

        if (startChar !== lastChar) {
            return false;
        }

        startInd++;
        lastInd--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
