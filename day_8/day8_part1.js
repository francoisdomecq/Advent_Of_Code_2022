const FileReader = require('../utils/file_reader')
const dataInput = FileReader.readFile('./day_8/data.txt')

const dataInputFormatted = dataInput.map((value) => value.split(''))
let visibleTrees = 0

for (let i = 1; i < dataInputFormatted[0].length - 1; i++) {
    for (let j = 1; j < dataInputFormatted.length - 1; j++) {
        const value = dataInputFormatted[i][j]
        let isSuperiorInLineRight = true
        let isSuperiorInLineLeft = true
        let isSuperiorInColumnTop = true
        let isSuperiorInColumnBottom = true
        for (let k = 0; k < j; k++) {
            if (value <= dataInputFormatted[i][k]) {
                isSuperiorInLineLeft = false
            }
        }
        for (let k = dataInputFormatted[i].length - 1; k > j; k--) {
            if (value <= dataInputFormatted[i][k]) {
                isSuperiorInLineRight = false
            }
        }
        for (let k = 0; k < i; k++) {
            if (value <= dataInputFormatted[k][j]) {
                isSuperiorInColumnTop = false
            }
        }
        for (let k = dataInputFormatted.length - 1; k > i; k--) {
            if (value <= dataInputFormatted[k][j]) {
                isSuperiorInColumnBottom = false
            }
        }

        if (
            isSuperiorInColumnBottom ||
            isSuperiorInColumnTop ||
            isSuperiorInLineLeft ||
            isSuperiorInLineRight
        ) {
            // console.log(value, i, j)
            visibleTrees++
        }
    }
}

totalVisibleTrees =
    visibleTrees + dataInput[0].length * 2 + dataInput.length * 2 - 4

console.log(totalVisibleTrees)
