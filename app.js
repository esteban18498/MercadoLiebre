const express= require("express")
const app=express();
const path = require('path');

const port = process.env.PORT || 3000;


console.log(__dirname)

app.use('/static', express.static(__dirname + '/public'));

app.get("/", (req , res)=> res.sendFile(path.join(__dirname, '/views/home.html')))

app.listen(port, ()=>console.log("hi... from 3000") )
