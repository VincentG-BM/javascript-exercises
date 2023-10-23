const sumAll = function(minNum, maxNum) {

    let finalNumber = 0

    if (minNum < 0 || maxNum < 0) {
        return "ERROR"
    } else if (typeof minNum != "number" || typeof maxNum != "number") {
        return "ERROR"
    }

    if (maxNum < minNum) {
        [minNum, maxNum] = [maxNum, minNum]
    }

    for (i = minNum; i < maxNum + 1; i++) {
        finalNumber += i
    }

    return finalNumber;
};

// Do not edit below this line
module.exports = sumAll;
