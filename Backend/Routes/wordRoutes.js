const express = require ('express')
const router = express.Router()
const Word = require ('../Models/wordSchema')

//post word
router.post('/newword' ,(req,res)=>{
let newWord = new Word(req.body)
newWord.save()

})
//get words
router.get('/', async (req, res) => {
  try {
    // Use the "Word" model to find all documents in the "words" collection
    const data = await Word.find({});
    // Respond with the retrieved data in JSON format
    res.json(data);
  } catch (err) {
    // If there's an error, log it
    console.error(err);
    // Respond with an error status code (e.g., 500) and an error message
    res.status(500).send('Internal Server Error');
  }
});
////get word by id
router.get("/:id", (req, res) => {
    Word.findById({ _id: req.params.id }, (err, data) => {
      err ? console.log(err) : res.json(data);
    });
  });
//delete word by id
router.delete('/:id' ,(req,res)=>{
    Word.findByIdAndDelete({_id:req.params.id},(err,data)=>{
    err ? console.log(err) : res.json(data)
    })
    })
//update word by id
router.put('/:id' ,(req,res)=>{
    Word.findByIdAndUpdate({_id:req.params.id},{...req.body},(err,data)=>{
    err ? console.log(err) : res.json(data)
    })
    })



module.exports = router