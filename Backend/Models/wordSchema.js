const mongoose = require('mongoose')
const Schema = mongoose.Schema;
//const Image = require ('./imageSchema')


const wordSchema= new Schema({
    word: String, 
    //img:[Image.schema],
    gender:String,
    meaning: String,
    level: String,
    category: String
})

const Word= mongoose.model('Word', wordSchema)

module.exports = Word;