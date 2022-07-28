const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3003 

//main page
app.get("/", (req, res) => {
    res.send('<h1>99 bottles of beer</h1> <a href="http://localhost:3000/98"> take one down, pass it around</a>')
})

//98
app.get("/98", (req, res) => {
    res.send('<h1>98 bottles of beer</h1>')
})

app.get("/:numOfBottles", (req, res) => {
    if(parseInt(req.params.numOfBottles)===0) {
        res.send("<h1>There are no more beers left!</h1>")
    }
    else {
        let minusOne=(parseInt(req.params.numOfBottles)-1) 
        res.send(`<h1> ${req.params.numOfBottles} bottles of beer left!</h1> <h2> ${req.params.numOfBottles} beers! </h2> <h3>Take one down</h3> <h4>Pass it around</h4> <a href=http://localhost:3000/${minusOne}> One less </a>`)
    }
})

// app.get('/:any', (req, res) => {
//     if (parseInt(req.params))
// })
// //any number 
// app.get('/:any', (req, res) => {
//     res.send("<h1>bottles of beer on the wall</h1>")
// })

// //0 bottles left
// app.get('/0', (req, res) => {
//     res.send("<h1>0 bottles left!</h1>")
// })


app.listen(3000, function() {
    console.log('Listening on port', port)
 })
 