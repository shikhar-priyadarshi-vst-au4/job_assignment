const Slate = require ('../models/Slates');
const List =  require ('../models/Lists');
const Task =  require ('../models/Tasks');
const mongoose = require ('mongoose');
function slate (){

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
 
    this.createList = async ( req, res) => {
      let  { slateId }  = req.params;
      let { listName } = req.body;
      try{
        let slate = await Slate.findOne({ _id : slateId });
        if(slate){
            let list = await List.create({listName, slateId });
            res.json(list); 
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
            res.json(task);
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
                res.json(updated);            
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