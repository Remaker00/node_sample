const express = require('express');
const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser.urlencoded());

app.use('/add-product', (req,res,next) => {
    res.send(`<form action='/product' method='POST'>
    <label for="product">Product Name:</label>
    <input type="text" id="product" name="product"><br>
    <label for="size">Product Size:</label>
    <input type="text" id="size" name="size"><br>
    <button type='submit'>Add product</button>
    </form>`)
}) ; 


app.use('/product', (req,res,next)=> {
    console.log(req.body);
    res.redirect('/');
});


app.use('/', (req,res,next)=> {
    res.send('<h1>Hello from express</h1>');
});

app.listen(3000)