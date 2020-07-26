const validator = require('validator')
const chalk = require('chalk')

const getNotes = require('./notes')

// argv[0] node executable
// argv[1] file/script name
console.log(process.argv[2])
const command = process.argv[2]

if (command === 'add'){
    console.log('Adding note')
} else if (command === 'remove') {
    console.log('Removing note')
}