const FileReader = require('../utils/file_reader')
const dataInput = FileReader.readFile('./day_7/data.txt')

const ROOT = '/'
let total_filesize = 0
let folder_sizes = {}
let pwd = [ROOT]

for (let line of dataInput) {
    const parts = line.split(' ')
    const isCommand = parts[0] == '$'
    const isCd = isCommand && parts[1] == 'cd'

    if (isCd && parts[2] == '..') {
        pwd.pop()
    } else if (isCd && parts[2] != '/') {
        pwd.push(parts[2])
    } else if (!isCommand && parts[0] != 'dir') {
        size = parseInt(parts[0])

        let tmp = [...pwd]

        while (tmp.length > 0) {
            key = tmp.join('.')

            if (!(key in folder_sizes)) {
                folder_sizes[key] = 0
            }

            folder_sizes[key] += size
            tmp.pop()
        }

        total_filesize += size
    }
}


const smaller_than = Object.values(folder_sizes).filter((n) => {
    return n <= 100_000
})

console.log(smaller_than.reduce((acc, elem) => acc + elem, 0))
