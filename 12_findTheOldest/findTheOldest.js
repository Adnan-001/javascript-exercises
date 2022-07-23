const findTheOldest = function(people) {
    return people.reduce((oldest, current) =>{

        if (!('yearOfDeath' in current)) {
            currentAge = (new Date()).getFullYear() - current.yearOfBirth;            
        }
        else{
            currentAge = current.yearOfDeath - current.yearOfBirth;
        }

        if (!('yearOfDeath' in oldest)) {

            oldestAge = (new Date()).getFullYear() - oldest.yearOfBirth;            
        }
        else{
            oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
        }        

        if (currentAge > oldestAge) {
            oldest = current; 
        }
        return oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
