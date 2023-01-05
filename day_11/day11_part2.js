const { parse } = require('path')
const FileReader = require('../utils/file_reader')
const dataInput = FileReader.readFile('./day_11/data.txt')

let monkeys = []

for (let i = 0; i < dataInput.length; i = i + 7) {
    let items = dataInput[i + 1]
        .substring(dataInput[i + 1].indexOf(':') + 1, dataInput[i + 1].length)
        .split(',')
    let monkey = {
        itemsInspected: 0,
        items: items.map((value) => {
            return parseInt(value)
        }),
        operation: [
            dataInput[i + 2].split(' ')[6],
            dataInput[i + 2].split(' ')[7],
        ],
        test: parseInt(dataInput[i + 3].split(' ')[5]),
        true: parseInt(dataInput[i + 4].split(' ')[9]),
        false: parseInt(dataInput[i + 5].split(' ')[9]),
    }
    monkeys.push(monkey)
}

let modulo = monkeys.reduce((a, b) => a * b.test, 1)

for (let i = 0; i < 10000; i++) {
    for (const monkey of monkeys) {
        for (let item of monkey.items) {
            monkey.itemsInspected++
            let worryLevel = parseInt(item)
            let newValue = undefined
            if (monkey.operation[1] === 'old') {
                newValue = worryLevel
            } else {
                newValue = parseInt(monkey.operation[1])
            }
            switch (monkey.operation[0]) {
                case '+':
                    worryLevel = worryLevel + newValue
                    break
                case '*':
                    worryLevel = worryLevel * newValue
                    break
            }
            worryLevel = worryLevel % modulo
            if (worryLevel % monkey.test === 0) {
                monkeys[monkey.true].items.push(worryLevel)
            } else {
                monkeys[monkey.false].items.push(worryLevel)
            }
        }
        monkey.items.splice(0, monkey.items.length)
    }
}

console.log(
    monkeys
        .sort((a, b) => b.itemsInspected - a.itemsInspected)
        .splice(0, 2)
        .reduce((val, a) => {
            return val * a.itemsInspected
        }, 1)
)
