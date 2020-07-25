const validator = require('validator')
const getNotes = require('./notes')
const chalk = require('chalk');

//const utils = require('./utils')
console.log(getNotes())

//console.log(utils)

console.log(validator.isEmail('abc_def@gh.com'))
console.log(validator.isURL("https://pugmarx.me"))

const greenMsg = chalk.green("Success!")
console.log(greenMsg)

// const addFunc = require('./utils.js')
// console.log(addFunc(3, 4))