const fs = require('fs')
const { notStrictEqual } = require('assert')

console.log('notes.js')


const getNotes = function (){
    return 'Your notes...'
}

const addNote = function (title, body){
    console.log('Add the note...')
    const notes = loadNotes()

    // do not allow duplicate notes (note with the same title)
    const duplicateNotes = notes.filter(function(note){
        return note.title === title
    })
    if(duplicateNotes.length ===0 ){
        notes.push({
            title : title,
            body: body
        })
        saveNotes(notes)
        console.log("Note added!")
    }else{
        console.log("Note already exists")
    }
}

const removeNote = function (title){
    console.log('Removing the note...')
    const notes = loadNotes()

    // find the note
    const notesToRetain = notes.filter(function(note){
        return note.title != title
    })
    if(notesToRetain.length > 0 ){
        //console.log("Note not found")
        saveNotes(notesToRetain)
        console.log("Removed note(s) with title:"+title)
    }else{
        console.log("Note note found")
    }
}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function(){
    try{
        const dataBuffer  = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []
    }
}

module.exports = {
    getNotes : getNotes,
    addNote : addNote,
    removeNote : removeNote
}