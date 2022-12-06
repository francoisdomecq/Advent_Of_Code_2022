const FileReader = require('../utils/file_reader')
const dataInput = FileReader.readFile('./day_6/data.txt')

const dataStream = dataInput[0]

function findMarker(dataStream) {
    for (let i = 0; i < dataStream.length - 3; i++) {
        let values = dataStream.substring(i, i + 4).split('')
        if (
            values.filter((item, pos, self) => {
                return self.indexOf(item) == pos
            }).length === 4
        ) {
            return i + 4
        }
    }
}

console.log(findMarker(dataStream))
