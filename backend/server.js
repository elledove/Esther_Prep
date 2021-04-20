//This will be our entry point for our backend server.
const { response } = require('express');
const express = require('express');
const app = express();

//This was a test to see if the get request is working properly and something was being sent to localhost 5000
app.get('/',(request,response) => {
    response.send('API is running Captian Picard....')
})

app.get('/api/products',(request,response) => {
    response.send('API is running Captian Picard....')
})





app.listen(5000, console.log('Success Boss! Server is running on 5000'))