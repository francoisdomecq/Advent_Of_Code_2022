const FileReader = require('../utils/file_reader')
const dataInput = FileReader.readFile('./day_3/data.txt')

function getDuplicates(rucksack1, rucksack2, rucksack3) {
    for (let i = 0; i < rucksack1.length; i++) {
        if (
            rucksack2.includes(rucksack1[i]) &&
            rucksack3.includes(rucksack1[i])
        ) {
            return rucksack1[i]
        }
    }
}

function getPriorities(char) {
    const priorities = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    return priorities.indexOf(char) + 1
}

function getPrioritiesSum(items) {
    let sum = 0
    for (let i = 0; i < items.length; i = i + 3) {
        const duplicate = getDuplicates(items[i], items[i + 1], items[i + 2])
        sum += getPriorities(duplicate)
    }
    return sum
}

console.log(getPrioritiesSum(dataInput))
