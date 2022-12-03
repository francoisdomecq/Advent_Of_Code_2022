const FileReader = require('../utils/file_reader')
const dataInput = FileReader.readFile('./day_3/data.txt')

function getFirstCompartmentsItems(string) {
    return string.substring(0, string.length / 2)
}

function getSecondCompartmentsItems(string) {
    return string.substring(string.length / 2, string.length)
}

function getDuplicates(compartment1, compartment2) {
    for (let i = 0; i < compartment1.length; i++) {
        if (compartment2.includes(compartment1[i])) {
            return compartment1[i]
        }
    }
}

function getPriorities(char) {
    const priorities = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    return priorities.indexOf(char) + 1
}

function getPrioritiesSum(items) {
    let sum = 0
    for (let i = 0; i < items.length; i++) {
        const compartment1 = getFirstCompartmentsItems(items[i])
        const compartment2 = getSecondCompartmentsItems(items[i])
        let duplicate = getDuplicates(compartment1, compartment2)
        sum += getPriorities(duplicate)
    }
    return sum
}

console.log(getPrioritiesSum(dataInput))
