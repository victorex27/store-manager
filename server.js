"use strict";

import express from 'express';
import session from 'express-session';


import bodyParser from 'body-parser';
import bcrypt from 'bcrypt';
import fs from 'fs';
var app = express();
import path from 'path';

import users from './js/attendant';
import usersData from './db/user';
import products from './db/product';

import sales from './db/sale';
import CartForm from './cart';

import productModel from './js/product';
import order from './js/order';
/*

import owner from "./routes/owner";
import index from "./routes/index";
import shop from "./routes/shop"; 
import attendants from "./routes/attendants";
import attendant from "./routes/attendant";
import error from "./routes/error";  
     
*/
//import users from './js/attendant';
import routes  from './routes/index.js';

//app.use(session({secret: "XergJyujkhkhkd"}));
/*
app.use(session({
    key: 'user_sid',
    secret: 'somerandonstuffs',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    }
}));

app.use((req, res, next) => {
    if (req.cookies.user_sid && !req.session.user) {
        res.clearCookie('user_sid');        
    }
    next();
});

var sessionChecker = (req, res, next) => {
    if (req.session.user && req.cookies.user_sid) {
        res.redirect('/dashboard');
    } else {
        next();
    }    
};

*/
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
routes(app);

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
var v1 = express.Router();




let data2 = fs.readFileSync('./db/admin.json');
let jsonDataOfAdmin = JSON.parse(data2);

// get the last inserted id for the users class
let data3 = fs.readFileSync('./db/last_user.json');
let lastUser = JSON.parse(data3);


/*
app.get('*', function(req, res) {
  res.render('/error');
});

*/


app.post('/user', function(req, res){
       

  //if(req.body.user && req.body.password){

    // first try and catch then check if the username already exists
    try{

      let keyData = Object.keys(jsonDataOfUser);

       
        if( keyData.includes(req.body.username))
          throw('Username already exists..');

       

      bcrypt.hash(req.body.password, 10, function(err, hash) {

      let user = new users(++lastUser.no,hash);

      jsonDataOfUser[req.body.username] = user;

      let data = JSON.stringify(jsonDataOfUser,null,2);

           fs.writeFile("./db/user.json",data,function(err){

            
        //    throw(err);
           });

           let curr = '{"no":'+lastUser.no+'}';

           fs.writeFile("./db/last_user.json",curr,function(err){

            
      //      throw(err);
           });


  
    });

      

    }catch(e){

        console.log(e);

        

    }finally{
      res.redirect('./attendants');
    }
    

    });

    

    app.post('/login_user', function(req, res){


      login(req,res,jsonDataOfUser,'index','shop');
       
        
    });


    app.post('/login_admin', function(req, res,){


      login(req,res,jsonDataOfAdmin,'owner','attendants');
       
        
    });

    v1.use('/products', express.Router().get('/:id', (req, res, next) =>{

      let prod = products();

      const ans = prod.filter((obj) =>{
         return Number(obj.id) === Number(req.params.id);
      });


     
       res.send(ans);
        
    }));


    v1.use('/products', express.Router().get('/', (req, res, next) =>{


      res.send(products());
     
       
        
    }));

    

    v1.use('/sales', express.Router().get('/:id', (req, res, next) =>{

      let sale = sales();

      const ans = sale.filter((obj) =>{
         return Number(obj.id) === Number(req.params.id);
      });


     
       res.send(ans);
     
       
        
    }));


    v1.use('/sales', express.Router().get('/', (req, res, next) =>{


      res.send(sales());
     
       
        
    }));


    v1.use('/products', express.Router().post('/', (req, res, next) =>{

      let allProducts = products();
      let name = req.body.name;

      let quantity = req.body.quantity;

      let price = req.body.price;

      let inventory = req.body.inventory;

      let category = req.body.category;

      let newProduct = new productModel(Object.keys(allProducts).length + 1,name,price,quantity,inventory);

      products().push(newProduct);
      res.send("done");
     
       
        
    }));

    v1.use('/sales', express.Router().post('/', (req, res, next) =>{

      let allOrders = sales();
      let user = req.body.user;

      let products = req.body.products;

      
      let newOrder = new Order(Object.keys(allOrders).length + 1,products,user);

      sales().push(newOrder);
      res.send("done");
     
       
        
    }));

    
    app.use('/v1', v1);
    function login(req,res,data,home,redirect){


      try{
          


        let keyData = Object.keys(data);

       
        if( keyData.includes(req.body.username)){
            
            if(bcrypt.compareSync(req.body.password, data[req.body.username]['password'])) {
                // Passwords match
                console.log("Authentic");
                //req.session.userid = data[req.body.username]['id'];
                res.redirect('/'+redirect);
                } else {
                // Passwords don't match
                
                  throw('Unauthorized access');
                }              

        }else{
          throw('User does not exists..');
        }

  
       }catch(e){

          //console.log(e);
          res.redirect('/'+home);
       }

      

    }



app.listen(3000, () => {
 console.log("Server running on port 3000");
});