const FileReader = require('../utils/file_reader')

function searchMaxCalories(array) {
    let maxCalories = []
    let actualCalories = 0
    let i = 0
    while (i < array.length) {
        if (array[i] !== '') {
            actualCalories += parseInt(array[i])
        } else {
            maxCalories.push(actualCalories)
            actualCalories = 0
        }
        i++
    }
    maxCalories.sort((a, b) => b - a)
    return maxCalories[0] + maxCalories[1] + maxCalories[2]
}

const input = FileReader.readFile('./day_1/data.txt')
console.log(searchMaxCalories(input))
