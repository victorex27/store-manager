'use strict';
import products from './../db/product';

module.exports = function(app) {


 app.get('/', function(req, res) {
   res.render('pages/index');
 });

 app.get('/attendants', function(req, res) {


   res.render('pages/attendants');
 });

  app.get('/attendant', function(req, res) {
   res.render('pages/attendant');
 });

  app.get('/bookmark', function(req, res) {
   res.render('pages/bookmark');
 });

app.get('/category', function(req, res) {
   res.render('pages/category');
 });


app.get('/error', function(req, res) {
   res.render('pages/error');
 });

app.get('/index', function(req, res) {
   res.render('pages/index');
 });

app.get('/owner', function(req, res) {
   res.render('pages/owner');
 });

app.get('/product_admin', function(req, res) {
   res.render('pages/product_admin');
 });

app.get('/products_admin', function(req, res) {
   res.render('pages/products_admin');
 });

app.get('/product_attendant', function(req, res) {
   res.render('pages/product_attendant');
 });

app.get('/products_attendant', function(req, res) {
   res.render('pages/products_attendant');
 });

app.get('/profile', function(req, res) {
   res.render('pages/profile');
 });

app.get('/sales_record_attendant', function(req, res) {
   res.render('pages/sales_record_attendant');
 });

app.get('/sales_record_admin', function(req, res) {
   res.render('pages/sales_record_admin');
 });

app.get('/shop', function(req, res) {

  


   res.render('pages/shop',{products:products()});
 });




};