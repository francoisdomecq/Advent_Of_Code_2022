const FileReader = require('../utils/file_reader')

function searchMaxCalories(array) {
    let maxCalories = 0
    let actualCalories = 0
    let i = 0
    while (i < array.length) {
        if (array[i] !== '') {
            actualCalories += parseInt(array[i])
        } else {
            if (actualCalories > maxCalories) maxCalories = actualCalories
            actualCalories = 0
        }
        i++
    }
    return maxCalories
}

const input = FileReader.readFile('./day_1/data.txt')
console.log(searchMaxCalories(input))
