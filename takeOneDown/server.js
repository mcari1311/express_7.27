const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3003 


app.listen(3000, function() {
    console.log('Listening on port', port)
 })
 