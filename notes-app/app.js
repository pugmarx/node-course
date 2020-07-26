const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')

const getNotes = require('./notes')

// Customise yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command : 'add',
    describe: 'Add a new note',
    handler : function(){
        console.log('Adding a new note')
    }
})

// Create remove comand
yargs.command({
    command: 'remove',
    describe : 'Remove a note',
    handler : function(){
        console.log('Removing a note')
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe : 'List all notes',
    handler : function(){
        console.log('Listing notes')
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe : 'Read a note',
    handler : function(){
        console.log('Reading a note')
    }
})

// argv[0] node executable
// argv[1] file/script name
// console.log(process.argv[2])

console.log(yargs.argv)

//const command = process.argv[2]