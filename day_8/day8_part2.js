const FileReader = require('../utils/file_reader')
const dataInput = FileReader.readFile('./day_8/data.txt')

const dataInputFormatted = dataInput.map((value) => value.split(''))
let visibleTrees = []

for (let i = 1; i < dataInputFormatted[0].length - 1; i++) {
    for (let j = 1; j < dataInputFormatted.length - 1; j++) {
        const value = dataInputFormatted[i][j]
        let visibleTreesRight = 0
        let visibleTreesLeft = 0
        let visibleTreesTop = 0
        let visibleTreesBottom = 0
        for (let k = j - 1; k >= 0; k--) {
            visibleTreesLeft++
            if (value <= dataInputFormatted[i][k]) {
                break
            }
        }
        for (let k = j + 1; k < dataInputFormatted[0].length; k++) {
            visibleTreesRight++
            if (value <= dataInputFormatted[i][k]) {
                break
            }
        }
        for (let k = i - 1; k >= 0; k--) {
            visibleTreesTop++
            if (value <= dataInputFormatted[k][j]) {
                break
            }
        }
        for (let k = i + 1; k < dataInput.length; k++) {
            visibleTreesBottom++
            if (value <= dataInputFormatted[k][j]) {
                break
            }
        }
        visibleTrees.push(
            visibleTreesBottom *
                visibleTreesLeft *
                visibleTreesRight *
                visibleTreesTop
        )
    }
}

console.log(visibleTrees.sort((a, b) => b - a)[0])
