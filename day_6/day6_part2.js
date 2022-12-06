const FileReader = require('../utils/file_reader')
const dataInput = FileReader.readFile('./day_6/data.txt')

const dataStream = dataInput[0]

function findMessage(dataStream) {
    for (let i = 0; i < dataStream.length - 14; i++) {
        let values = dataStream.substring(i, i + 14).split('')
        if (
            values.filter((item, pos, self) => {
                return self.indexOf(item) == pos
            }).length === 14
        ) {
            return i + 14
        }
    }
}

console.log(findMessage(dataStream))
