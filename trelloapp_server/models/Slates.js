const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var slateSchema = new Schema({  
         slateName:{
           type : String,
           required : true,
           unique : true
         }
      }) 
var Slate = mongoose.model("Slate", slateSchema);
module.exports = Slate;