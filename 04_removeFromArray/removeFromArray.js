const removeFromArray = function(arr, ...valsToRemove) {
    for (let i = 0; i < arr.length; i++) {

        const element = arr[i];
        for (let j = 0; j < valsToRemove.length; j++) {

            if (element === valsToRemove[j]) 
            {
                delete arr[i];
                break;
            }    
        }
    }

    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== undefined) {
            result.push(arr[i]);       
        }
    }

    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
