const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const listSchema = new Schema({  
       slateId : {
         type: Schema.Types.ObjectId
        },      
        listName : {
             type : String,
             required : true
         }
      }); 
const List = mongoose.model("List", listSchema);
module.exports = List;

/*_slateId : {
          type: Schema.Types.ObjectId,
          ref : 'Slate'
        }, */