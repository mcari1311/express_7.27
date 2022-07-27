const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3003

//GREETINGS 
app.get('/greeting', (req, res) => {
    res.send('Hello, Stranger');
});
app.get('/greeting/:name', (req, res) => {
    res.send("Hello" + req.params.name)
});

//TIP CALCULATOR    
app.get('/tip', (req, res) => {
    res.send("Your tip should be")
})
app.get('/tip/:total/:tipPercentage', (req, res) => {
    let tip = parseInt(req.params.total) * (parseInt(req.params.tipPercentage)/100)
    res.send("Your tip is " + tip)
})

app.listen(3000, function() {
    console.log('Listening on port', port)
})
