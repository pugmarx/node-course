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

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

const chgBuffer = fs.readFileSync('1_1-json.json')
const chgBufferJSON = chgBuffer.toString()
const chgData = JSON.parse(chgBufferJSON)
console.log(chgData.name)

chgData.name="Gunther"
chgData.age = "33"

const chgDataStr = JSON.stringify(chgData)
fs.writeFileSync('1-json.json', chgDataStr)
