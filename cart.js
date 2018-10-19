'use strict';
import express from 'express';
import products from './db/product';
import bodyParser from 'body-parser';
var app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());




  function postToCart(){
    

    app.post('/shop/addToCart', function(req, res) {

      let name = req.body.name;

      let quantity = req.body.quantity;

      let product = products();

      let inventory = product.filter( e=>{ if(e.name === name) return e.quantity;});

      if(quantity > inventory){

        console.log("error");

      }else{

        console.log("good");
      }

    res.render('pages/shop',{products:products()});
 });
  }


module.exports = postToCart;