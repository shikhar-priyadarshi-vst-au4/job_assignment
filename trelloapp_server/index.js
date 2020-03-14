const express = require ('express');
const cors = require ('cors');
const mongoose = require ('mongoose');

let  log = console.log;
const PORT = process.env.PORT || 5000; 
const mongoDB = 'mongodb://127.0.0.1/trello_DB' || process.env.MONGODB_URI;

const app = express ();

app.use (cors());
app.use (express.urlencoded());
app.use (express.json());
app.use ('/slate' ,require('./routes/index'));
mongoose.connect(mongoDB, 
    { useNewUrlParser: true, 
    useUnifiedTopology: true }, 
    (err) => {     
        !err?app.listen(PORT, (error) => 
        log(`Server started at ${PORT}`)):
        log(' Error! DB Server Failed')
    });

