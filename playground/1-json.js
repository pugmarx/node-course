const fs = require('fs')
// const book = {
//     title : "Predictably Irrational",
//     author: "Dan Ariely"
// }

// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)
// console.log(bookJSON.title) // undefined - it's a string NOT Object

// const parseData = JSON.parse(bookJSON) // str -> obj
// console.log(parseData.author) // works!

// fs.writeFileSync('1-json.json', bookJSON)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data.title)