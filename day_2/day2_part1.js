function calculatePlayPoints(string) {
    let result
    switch (string) {
        case 'X':
            result = 1
            break
        case 'Y':
            result = 2
            break
        case 'Z':
            result = 3
            break
    }
    return result
}

function calculateResultPoints(array) {
    let elfPlay = array[0]
    let playerPlay = array[1]
    let pointsWon = 0
    if (
        (elfPlay === 'A' && playerPlay === 'X') ||
        (elfPlay === 'B' && playerPlay === 'Y') ||
        (elfPlay === 'C' && playerPlay === 'Z')
    ) {
        pointsWon = 3
    } else {
        if (
            (elfPlay === 'A' && playerPlay === 'Y') ||
            (elfPlay === 'B' && playerPlay === 'Z') ||
            (elfPlay === 'C' && playerPlay === 'X')
        ) {
            pointsWon = 6
        }
    }
    return pointsWon
}

function calculateTotalPoints(array) {
    return calculateResultPoints(array) + calculatePlayPoints(array[1])
}

function calculateTotalGamesPoints(array) {
    return array.reduce((accumulator, value) => {
        return accumulator + calculateTotalPoints(value)
    }, 0)
}

const FileReader = require('../utils/file_reader')
const dataInput = FileReader.readFile('./day_2/data.txt')
const dataInputFormatted = dataInput.map((value) => {
    return value.split(' ')
})

console.log(calculateTotalGamesPoints(dataInputFormatted))
