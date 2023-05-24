// Check if sum of 2 nums are greater than 100, return true or false

function sumGreaterThan100(numOne, numTwo) {
    if((numOne+numTwo) > 100){ 
        return true;
    }
    else {
        return false;
    }
}

console.log(sumGreaterThan100(50, 60))