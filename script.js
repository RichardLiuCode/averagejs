function getMean(inputList) {
    let total = 0;
    let result = 0;
    for (let i = 0; i < inputList.length; i++) {
        if (isNaN(inputList[i])) {
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
    console.log(arrangedNumbers);
    console.log(arrangedNumbers.length / 2)
    if (arrangedNumbers.length % 2 == 0) {
        return [arrangedNumbers[Math.floor(arrangedNumbers.length / 2)], arrangedNumbers[Math.floor((arrangedNumbers.length / 2) + 1)]]
    } else {
        return arrangedNumbers[Math.floor(arrangedNumbers.length / 2)]
    }
}

function getMode(inputList) {

}