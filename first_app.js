const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('Hey There!');
    next();
})

app.use((req,res,next) => {
    console.log('I am Fine');
    res.send('<h1> hello to node js </h1>')
})  

app.listen(3000)