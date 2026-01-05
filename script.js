function getMean(inputList) {
    let total = 0;
    let result = 0;
    for (let i = 0; i < inputList.length; i++) {
        total = total + inputList[i];
    }
    result = total / inputList.length;
    return result;
}