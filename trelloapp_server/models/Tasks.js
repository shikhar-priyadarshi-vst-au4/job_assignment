const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const taskSchema = new Schema({  
          listId : {
            type: Schema.Types.ObjectId
          },    
          taskName : {
             type : String,
             required : true
         },
         labelName :{
             type : String
         }
        }); 
    
const Task = mongoose.model("Task", taskSchema);
module.exports = Task;      
