const express = require("express")
const cors = require("cors")

const axios = require("axios")
const bodyParser = require("body-parser")

const portNumber = 3001
const app = express()

require('dotenv').config();

app.use(cors())
app.use(bodyParser.json())
 
let langs = []

app.get("/", function (request, response) {
    response.send("hello User"+ "there are" + langs.length + 'langs');
})


app.post("/", function (request, response){
   if (request.query.lang){
    langs.push(req.query.lang)
    ;}
    response.send(langs)
   
})

app.put("/", function (request, response) {
    if (request.query.index && req.query.lang) {
        langs[request.query.index] == request.query.lang;
        response.send(langs[req.query.index]);
    } else {
    response.send('NO Update Has been made');}
})

app.delete("/", function (request, response) {
    if(request.query.index) {
        langs[request.query.index] = undefined;
        response.send(request.query.index + 'was removed')
} else {
    response.send('Nothing was removed. Send an index');
   }
})

app.listen(3001, ()=>{
    console.log('http://localhost:3001')

})
