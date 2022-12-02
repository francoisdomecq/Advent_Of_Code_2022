const { readFileSync } = require('fs')
function readFile(filename) {
    const contents = readFileSync(filename, 'utf-8')

    const arr = contents.split(/\r?\n/)

    return arr
}

module.exports = {
    readFile,
}
