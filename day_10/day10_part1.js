const FileReader = require('../utils/file_reader')
const dataInput = FileReader.readFile('./day_10/data.txt')

let X = 1
let cycle = 0
let interestingSignals = []
let interestingSignalsCycle = [20, 60, 100, 140, 180, 220]
for (let line of dataInput) {
    const instruction = line.split(' ')
    const command = instruction[0]
    let valueToAdd = 0
    if (command === 'addx') {
        valueToAdd = parseInt(instruction[1])
        for (let i = 0; i < 2; i++) {
            cycle++
            if (interestingSignalsCycle.includes(cycle)) {
                interestingSignals.push(X * cycle)
            }
        }
        X += valueToAdd
    } else {
        cycle++
        if (interestingSignalsCycle.includes(cycle)) {
            interestingSignals.push(X * cycle)
        }
    }
}

console.log(interestingSignals.reduce((value, a) => value + a))
