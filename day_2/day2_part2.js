function calculatePlayToLose(string) {
    let result
    switch (string) {
        case 'A':
            result = 'C'
            break
        case 'B':
            result = 'A'
            break
        case 'C':
            result = 'B'
            break
    }
    return result
}

function calculatePlayToWin(string) {
    let result
    switch (string) {
        case 'A':
            result = 'B'
            break
        case 'B':
            result = 'C'
            break
        case 'C':
            result = 'A'
            break
    }
    return result
}

function calculatePlayPoints(string) {
    let result
    switch (string) {
        case 'A':
            result = 1
            break
        case 'B':
            result = 2
            break
        case 'C':
            result = 3
            break
    }
    return result
}

function calculateResultPoints(array) {
    let elfPlay = array[0]
    let playerPlay = array[1]
    let pointsWon = 0
    if (playerPlay === 'X') {
        pointsWon = calculatePlayPoints(calculatePlayToLose(elfPlay))
    } else if (playerPlay === 'Y') {
        pointsWon = 3 + calculatePlayPoints(elfPlay)
    } else if (playerPlay === 'Z') {
        pointsWon = 6 + calculatePlayPoints(calculatePlayToWin(elfPlay))
    }

    return pointsWon
}

function calculateTotalGamePoints(array) {
    return array.reduce((accumulator, value) => {
        return accumulator + calculateResultPoints(value)
    }, 0)
}

const FileReader = require('../utils/file_reader')
const dataInput = FileReader.readFile('./day_2/data.txt')
const dataInputFormatted = dataInput.map((value) => {
    return value.split(' ')
})

console.log(calculateTotalGamePoints(dataInputFormatted))
