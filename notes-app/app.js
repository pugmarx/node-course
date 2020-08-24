const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')

const notes = require('./notes')

// Customise yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command : 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: "Note title",
            demandOption : true,         // mark it required!
            type: 'string'
        },
        body: {
            describe: "Note body",
            demandOption : true,         // mark it required!
            type: 'string'
        }
    },
    handler : function(argv){
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove comand
yargs.command({
    command: 'remove',
    describe : 'Remove a note',
    builder: {
        title: {
            describe: "Note title",
            demandOption : true,         // mark it required!
            type: 'string'
        }
    },
    handler : function(argv){
        //console.log('Removing a note')
        notes.removeNote(argv.title)
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

yargs.parse() // necessary for parsing the args
// console.log(yargs.argv)

//const command = process.argv[2]