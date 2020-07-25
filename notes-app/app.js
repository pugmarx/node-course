const validator = require('validator')
const getNotes = require('./notes')
const chalk = require('chalk');

console.log(getNotes())


console.log(validator.isEmail('abc_def@gh.com'))
console.log(validator.isURL("https://pugmarx.me"))

const greenMsg = chalk.bold.green("Success!")
console.log(greenMsg)