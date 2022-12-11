const FileReader = require('../utils/file_reader')
const dataInput = FileReader.readFile('./day_10/data.txt')

let X = 1
let cycle = 0
let index = 0
let rows = []
let currentRow = []

for (let line of dataInput) {
    const instruction = line.split(' ')
    const command = instruction[0]
    let valueToAdd = 0
    if (command === 'addx') {
        valueToAdd = parseInt(instruction[1])
        for (let i = 0; i < 2; i++) {
            if (index >= X - 1 && index <= X + 1) {
                currentRow.push('#')
            } else {
                currentRow.push('.')
            }
            cycle++
            index++
            if (cycle % 40 === 0) {
                rows.push(currentRow)
                currentRow = []
                index = 0
            }
        }
        X += valueToAdd
    } else {
        if (index >= X - 1 && index <= X + 1) {
            currentRow.push('#')
        } else {
            currentRow.push('.')
        }
        cycle++
        index++
        if (cycle % 40 === 0) {
            rows.push(currentRow)
            currentRow = []
            index = 0
        }
    }
}

for (let line of rows) {
    console.log(line.join(' '))
}
