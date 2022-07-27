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

//Magic 8 Ball  
app.get('/magic', (req, res) => {
    let responses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    let randomNumber = Math.floor(Math.random() * 10).toString() 
    //not sure how to add h1 tags 
    let randomResponse = responses[randomNumber]
    res.send(randomResponse)
})


app.listen(3000, function() {
    console.log('Listening on port', port)
})
