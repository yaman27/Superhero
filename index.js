const express = require('express');
const retrive=require('./retrivehero');
const update=require('./update')
const retriveid=require('./retrivebyid');
const remove=require('./remove');
const app = express();

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./api/swagger/swagger.yaml');
 
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


const port=3000; 


var bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const MongoClient = require('mongodb').MongoClient;
 
// Connection URL

const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'postman';
 
// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
   console.log("Connected successfully to server");
  db=client.db(dbName)
app.post('/addherodetail', (req, res)=>{
    console.log(req.body)
    db.collection('herodetail').insertOne(req.body, function(err, result) {
        res.send("name entered!!")
      });
 });
app.get('/displayhero',(req,res)=>{
  retrive(db,(docs)=>{
    res.send(docs)
  })
  })
 
app.get('/getid',(req,res)=>{
  retriveid(db,(docs)=>{
    res.send(docs)
  })
  })
  app.put('/getupdate',(req,res)=>{
  update(db,()=>{ retrive(db,(docs)=>{res.send(docs)})})
 })

app.get('/delete',(req,res)=>{
  remove(db)})
  app.listen(port)
});



