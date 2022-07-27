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



app.listen(3000, function() {
    console.log('Listening on port', port)
})