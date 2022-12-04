const FileReader = require('../utils/file_reader')
const dataInput = FileReader.readFile('./day_4/data.txt')

function getFirstPair(string) {
    return string.substr(0, string.indexOf(','))
}

function getSecondPair(string) {
    return string.substr(string.indexOf(',') + 1)
}

function getFirstSeat(string) {
    return parseInt(string.substr(0, string.indexOf('-')))
}

function getSecondSeat(string) {
    return parseInt(string.substr(string.indexOf('-') + 1))
}

function isContained(string1, string2) {
    const firstSeatString1 = getFirstSeat(string1)
    const secondSeatString1 = getSecondSeat(string1)
    const firstSeatString2 = getFirstSeat(string2)
    const secondSeatString2 = getSecondSeat(string2)
    if (
        firstSeatString1 >= firstSeatString2 &&
        secondSeatString1 <= secondSeatString2
    ) {
        return true
    } else if (
        firstSeatString2 >= firstSeatString1 &&
        secondSeatString2 <= secondSeatString1
    ) {
        return true
    }
}

function iterate(dataInput) {
    let sum = 0
    for (const value of dataInput) {
        let firstPair = getFirstPair(value)
        let secondPair = getSecondPair(value)
        if (isContained(firstPair, secondPair)) {
            sum++
        }
    }
    return sum
}

console.log(iterate(dataInput))
