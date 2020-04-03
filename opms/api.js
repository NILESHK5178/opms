const express = require('express');
const fileUpload = require('express-fileupload');
const request = require('request');
var app = express();
var multer = require('multer');
var bodyParser = require('body-parser');
app.use(fileUpload());
app.use(bodyParser.json());



const mariadb = require('mariadb/callback');
// connection configurations
const mc = mariadb.createPool({
    connectionLimit: 50,
    host: '127.0.0.1',
    user: 'root',
    password: 'opms1234',
    database: 'opms',
    port: '3206',
    multipleStatements: true,
    queryTimeout: 160000
});
mc.getConnection((err) => {
    if (!err)
    console.log('Connection Success');
    else
    console.log('Connection Failed \n Error: ' + JSON.stringify(err, undefined, 2));
});


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  next();
});


app.listen(3208, ()=> console.log('express server is running at port no : 3208'));

// Upload files
app.post('/upload', (req, res) => {
  if(req.files===null){
    return res.status(400).json({msg: 'No file uploaded...'})
  }
  const file = req.files.file;
  file.mv(`${__dirname}/public/uploads/${file.name}`, err =>{
    if(err) {
      return res.status(500).send(err);
    }
    res.json({ fileName: file.name, filePath: `/uploads/${file.name}`});
  });
 });

 //Insert Company
app.post('/company', (req, res) => {
  let comp = req.body;
  var sql = "SET @name = ?; SET @logo = ?; \
  CALL sp1(@name, @logo);";
  mc.query(sql, [comp.companyname, comp.filepath],  (err, rows, fields)=>{
    if(!err)
    res.send(rows);
    else
    console.log(err);
  })
});

// Retrive All
app.get('/company', (req,res) => {
  mc.query('Select * from t1', (err, rows, fields)=>{
    if(!err)
    res.send(rows);
    else
    console.log(err);
  })
});


//Retrive user Datails by user name
app.get('/user/:username/:password', (req,res) => {
  mc.query('Select * from t2 where F1 = ? and F4 = ?', [req.params.username, req.params.password], (err, rows, fields)=>{
    if(!err)
    res.send(rows);
    else
    console.log(err);
  })
});



//Update Company
app.put('/company', (req,res) => {
  let comp = req.body;
  var sql = "SET @Name = ?; SET @UpdatedName = ?; \
  CALL sp2(@Name, @UpdatedName);";
  mc.query(sql, [comp.Name, comp.UpdatedName],  (err, rows, fields)=>{
    if(!err)
    res.send("Updated Successfully");
    else
    console.log(err);
  })
});

//Insert User
app.post('/newuser', (req,res) => {
  let comp = req.body;
  var sql = "SET @Empid = ?; SET @Username = ?; SET @CompanyName = ?; SET @email = ?; SET @password = ?; SET @ename = ?; SET @status = ?; \
  CALL sp4(@Empid, @Username, @CompanyName, @email, @password, @ename, @status);";
  mc.query(sql, [comp.empid, comp.username, comp.companyname, comp.email, comp.password, comp.empname, comp.wstatus],  (err, rows, fields)=>{
    if(!err)
    res.send(rows);
    else
    console.log(err);
  })
});

//Update User
app.put('/updateuser', (req,res) => {
  let comp = req.body;
  var sql = "SET @Empid = ?; SET @Username = ?; SET @email = ?; SET @id = ?; SET @ename = ?; SET @logo = ?; \
  CALL sp3(@Empid, @Username, @email, @id, @ename, @logo);";
  mc.query(sql, [comp.empid, comp.username, comp.email, comp.masterid, comp.empname, comp.filepath],  (err, rows, fields)=>{
    if(!err)
    res.send("Updated Successfully");
    else
    console.log(err);
  })
});

//Disable User
app.put('/userdisable/:masterid', (req,res) => {
  mc.query('Update t2 Set F9 = 0 where F8 = ?', [req.params.masterid], (err, rows, fields)=>{
    if(!err)
    res.send("Updated Successfully");
    else
    console.log(err);
  })
});

// Retrive User
app.get('/users/:companyname', (req,res) => {
  mc.query('Select F0, F1, F3, F5, F8 from t2 where F9 = 1 and F2 = ?', [req.params.companyname], (err, rows, fields)=>{
    if(!err)
    res.send(rows);
    else
    console.log(err);
  })
});

// Retrive Users by id
app.get('/usersid/:id', (req,res) => {
  mc.query('Select F0, F1, F3, F6, F5, F8 from t2 where F8 = ?', [req.params.id], (err, rows, fields)=>{
    if(!err)
    res.send(rows);
    else
    console.log(err);
  })
});