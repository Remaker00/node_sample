const express = require('express');

const router = express.Router();

router.get('/add-product', (req,res,next) => {
    res.send(`<form action='/admin/add-product' method='POST'>
    <label for="product">Product Name:</label>
    <input type="text" id="product" name="product"><br>
    <label for="size">Product Size:</label>
    <input type="text" id="size" name="size"><br>
    <button type='submit'>Add product</button>
    </form>`)
}) ; 

router.post('/add-product', (req,res,next)=> {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;