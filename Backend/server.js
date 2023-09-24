const express = require ('express')
const app = express()
app.use(express.json())
var cors = require('cors')
require('dotenv').config()
const connectDB  = require('./Config/connectDB')
const port = process.env.PORT

app.use(cors(
    {
        "origin": 'https://die-der-das-german-web-app-t4n8.vercel.app',
        "methods": 'GET,HEAD,PUT,PATCH,POST,DELETE',
        "credentials": true
      }
      
))
connectDB()
app.use(express.json())
app.use ('/words' , require ('./Routes/wordRoutes') )
app.get ('/' ,(req, res) =>{
    res.json("hello")
})

app.listen(port,(err)=>{
    err? console.log(err): console.log(`Server is running on port ${port}`)
})

