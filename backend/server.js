//This file  will be our entry point for our backend server.
// require('express') is allowing the express package ti be used in this file. 
// const { response } = require('express');
const express = require('express');
//This line of code is allowing the file products to be used in this file.
const products = require('./data/products')
const app = express();

//This was a test to see if the get request is working properly and something was being sent to localhost 5000
app.get('/',(request,response) => {
    response.send('API is running Captian Picard....')
})

//This is making a get request to the products and returning the information in a json format.
app.get('/api/products',(request,response) => {
    response.json(products)
})

app.get('/api/product/:id',(request,response) => {
    const product = products.find(p => p._id === request.params.id)
    response.json(product)
})




app.listen(5000, console.log('Success Boss! Server is running on 5000'))