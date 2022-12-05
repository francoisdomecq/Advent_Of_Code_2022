const FileReader = require('../utils/file_reader')
const dataInput = FileReader.readFile('./day_5/data.txt')

const moves = dataInput.filter((value) => {
    return value.includes('move')
})

const columns = dataInput.filter((value) => {
    return !value.includes('move') && value !== '' && !value.includes('1')
})

let stacks = []
let z = 0

for (let i = 0; i < columns.length + 1; i++) {
    let stack = []
    for (let j = 0; j < columns.length; j++) {
        if (columns[j].substring(z, z + 3) !== '   ')
            stack.push(columns[j].substring(z, z + 3))
    }
    z = z + 4
    stacks.push(stack)
}

function move(move, array) {
    let amountToMove = parseInt(move.substring(5, 7))
    let fromToMove = parseInt(move.substring(12, 14) - 1)
    let toToMove = parseInt(move.substring(17, 19) - 1)
    for (let j = 0; j < amountToMove; j++) {
        array[toToMove].unshift(array[fromToMove][0])
        array[fromToMove].splice(0, 1)
    }
}

function movesIteration(moves, array) {
    for (const value of moves) {
        move(value, array)
    }
}

function getLetters(moves, array) {
    movesIteration(moves, array)
    for (let i = 0; i < array.length; i++) {
        console.log(array[i][0].replace('/[ /]', ' '))
    }
}

getLetters(moves, stacks)
