const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
 
// parse application/json
app.use(bodyParser.json());
 
//create database connection
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'niit',
  database: 'fullstackdb'
});
 
//connect to database
conn.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected...');
});
 
//show all users
app.get('/api/users',(req, res) => {
  let sql = "SELECT * FROM registrationwithroles";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//show single user
app.get('/api/users/:user_reg_id',(req, res) => {
  let sql = "SELECT * FROM registrationwithroles WHERE user_reg_id="+req.params.user_reg_id;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//add new product
app.post('/api/users',(req, res) => {
  let data = {user_email: req.body.user_email, user_password: req.body.user_password,user_repassword: req.body.user_repassword,user_role:req.body.user_role};
  let sql = "INSERT INTO registrationwithroles SET ?";
  let query = conn.query(sql, data,(err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//update product
app.put('/api/users/:user_reg_id',(req, res) => {
  let sql = "UPDATE registrationwithroles SET user_name='"+req.body.user_email+"',user_password='"+req.body.user_password+"',user_repassword='"+req.body.user_repassword+"',user_role='"+req.body.user_role+"' WHERE user_reg_id="+req.params.user_reg_id;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//Delete product
app.delete('/api/users/:user_reg_id',(req, res) => {
  let sql = "DELETE FROM registrationwithroles WHERE user_reg_id="+req.params.user_reg_id+"";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//Server listening
app.listen(3000,() =>{
  console.log('Server started on port 3000...');
});



	