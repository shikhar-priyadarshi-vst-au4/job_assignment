const Slate = require ('../models/Slates');
const List =  require ('../models/Lists');
const Task =  require ('../models/Tasks');
const mongoose = require ('mongoose');
function slate (){

this.viewSlate = async ( req, res) => {
    //updating a slate after lists are added to it.
    let { slateName } = req.params;
    try {
        let slateBoard = await Slate.findOne({ slateName }).populate('lists').exec();
        if(slateBoard){
        
            slateBoard?res.status(200).json( slateBoard ):
            res.json({message : "Slate doesn't exist"});
        
    }        
    }
        catch(err){
          
            res.json(
                { error: err.message }
                )
        
            }
    }



    //create a slate 
    this.createSlate = async ( req, res ) => {
        
        let { slateName }  = req.params;
       
        try {
           let slateBoard = await Slate.create({ slateName });
           if(slateBoard){
            res.status(200).json( slateBoard );
           }
        }
        catch(err){
            res.json( { error: err.message } );
        
        }
    }


    // fetching a list 
    this.viewList = async ( req, res) => {
         let { viewId } = req.params;
         try{
            let data = await List.findById(viewId).populate('tasks').exec();
            data?res.status(200).json( data ):
            res.json({message : "No task available "}); 
         
         }
         catch(err){
             res.json({error : err.message});
         }
         
    }


    //creates a list params slateId && listName 
    this.createList = async ( req, res) => {
     console.log(req.params, req.body);
        //let { slateName, listName } = req.params;             
      let  { slateId }  = req.params;
      let { listName } = req.body;
      try{
        let slate = await Slate.findOne({ _id : slateId });
        if(slate){
            let list = await List.create({listName, slateId });
            var id = mongoose.Types.ObjectId(list._id);
            slate.lists.push(id);
            slate.save();
            res.json(slate); 
        }
        }
      catch(err){
        res.json( { error: err.message } );
    
      }
    }


    //task creator requires listId , taskName & labelName
    this.createTask = async( req, res) => {
        let { listId } = req.params;
        let { taskName, labelName = 'Incomplete' } = req.body;
       
      try{
          let list = await List.findOne({ _id : listId });
          if(list){
            let task = await Task.create({ listId, taskName, labelName });
            let id   = await mongoose.Types.ObjectId(task._id);
            list.tasks.push(id);
            list.save();
            res.json(list);
          }
          
        }
       catch(err){
           console.log(err);
       }  
    }
    
    this.editTask = async ( req, res) => {
        let { taskId } = req.params;
        let { taskName } = req.body;
        try{
                let updated = await Task.findByIdAndUpdate(taskId,{ taskName });
                res.json({ message : 'data updated successfully' });            
        }
        catch(err){
            res.json({error : err.message});
        }
    }
    
    this.moveTask = async (req, res) => {
        let { listId, taskId } = req.params;
        
    }
}
   
module.exports = new slate ();




const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const listSchema = new Schema({  
       slateId : {
         type: Schema.Types.ObjectId,
         ref : 'Slate'
        },      
        listName : {
             type : String,
             required : true
         },
         tasks : [{
             type: mongoose.Schema.Types.ObjectId,
             ref : 'Task'
         }]
      }); 
const List = mongoose.model("List", listSchema);
module.exports = List;

/*_slateId : {
          type: Schema.Types.ObjectId,
          ref : 'Slate'
        }, */




        const mongoose = require('mongoose');
const List = require('./Lists');
var Schema = mongoose.Schema;

var slateSchema = new Schema({  
         slateName:{
           type : String,
           required : true,
           unique : true
         },
         lists :[{ 
            type: mongoose.Schema.Types.ObjectId,
            ref : 'List' }]
        
      }) 
var Slate = mongoose.model("Slate", slateSchema);
module.exports = Slate;




const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const taskSchema = new Schema({  
          listId : {
            type: Schema.Types.ObjectId,
            ref : 'List'
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
