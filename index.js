const express = require("express");
const app = express();

const path= require('path');
const PORT= process.env.PORT || 5001;
const router = express.Router();

app.use(express.static('views'))
app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname+'/views/home.html'))
    
})
app.get("/about", (req,res) => {
    res.sendFile(path.join(__dirname+'/views/about.html'))
    
})

app.use('/',router)

app.listen(PORT, () => {
    console.log(`servers run on port ${PORT}`)
})