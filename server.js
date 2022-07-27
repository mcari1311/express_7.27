const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3003

const hello = ['hi']
app.get('/', (req, res) => {
    res.send(hello);
});

app.listen(3000, function() {
    console.log('Listening on port', port)
})