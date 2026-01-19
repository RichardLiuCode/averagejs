function getMean(inputList) {
    let total = 0;
    let result = 0;
    for (let i = 0; i < inputList.length; i++) {
        if (isNaN(inputList[i]) || (inputList[i] == "") || (!inputList[i])) {
            throw new Error("There is an item in the input list which is not a number, all the items in the input list are required to be a number");
        } else {
            total = total + parseFloat(inputList[i]);
        }
    }
    result = total / inputList.length;
    return result;
}

function getMedian(inputList) {
    let inputNumbers = inputList;
    let numbersFromGreatestToLeast = [];
    while (inputNumbers.length > 0) {
        let largest = inputNumbers[0];
        for (let i = 0; i < inputNumbers.length; i++) {
            if (isNaN(inputNumbers[i]) || (inputNumbers[i] == "") || (!inputNumbers[i])) {
                throw new Error("There is an item in the input list which is not a number, all the items in the input list are required to be a number");
            }
            if (inputNumbers[i] > largest) {
                largest = inputNumbers[i];
            }
        }
        for (let i = 0; i < inputNumbers.length; i++) {
            if (inputNumbers[i] == largest) {
                numbersFromGreatestToLeast.push(largest);
                inputNumbers.splice(i, 1);
            }
        }

    }
    let arrangedNumbers = numbersFromGreatestToLeast.reverse();
    if (arrangedNumbers.length % 2 == 0) {
        return [arrangedNumbers[Math.floor(arrangedNumbers.length / 2) - 1], arrangedNumbers[Math.floor((arrangedNumbers.length / 2))]]
    } else {
        return arrangedNumbers[Math.floor(arrangedNumbers.length / 2)]
    }
}

function getModes(inputList) {
    const count = {};

    for (let num of inputList) {
        count[num] = (count[num] || 0) + 1;
    }

    let maxCount = Math.max(...Object.values(count));
    let modes = [];

    for (let num in count) {
        if (count[num] === maxCount) {
            modes.push(Number(num));
        }
    }

    return modes;
}