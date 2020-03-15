import React, { Fragment } from 'react';
import { List } from './List';
import { Key } from './Button';
import { Input } from './Input';
export const SlateBoard = ( Props ) => {
    
  return(
        
            <div className="board">
               { Props.List.length>0 && <div className="board_list">
                
                <List  List={Props.List} 
                       Task = {Props.Task}
                       emptyField = { Props.emptyField }
                       cardTaskID = { Props.cardTaskID }
                       cardListID = { Props.cardListID }
                       CardInput = { Props.CardInput } 
                       EditInput = { Props.EditInput }
                       editTask  = { Props.editTask }
                       assignLabelToTask = { Props.assignLabelToTask }
                       addCardInput = { Props.addCardInput }
                       editCardInput = { Props.editCardInput }
                       taskName = { Props.taskName } 
                       labelName = { Props.labelName } 
                       CreateTask = { Props.CreateTask }
                       switchCardInput = { Props.switchCardInput }
                       ChangeHandler = { Props.ChangeHandler }/>
                
                </div>}
               
              { Props.activateInput && <div className= "board_input_key">  
                 
                {Props.emptyField && <div className="d-flex flex-column">
                <small className = {'errorField'} >
                  Field is empty</small>
                  <small className = {'error'} ></small>
                  </div>}
                  
                
                 
                 <Input 
                 listName={Props.listName}
                 ChangeHandler = {Props.ChangeHandler} 
                  for="List"/>
                 
                 <Key CreateList = {Props.CreateList}  
                 for="List"/>

                 
                </div>}
                
                { !Props.activateInput && <div className= "board_key">
                
                 <Key for={'SlateBoard'}
                  switchToInput={Props.switchToInput}/>
                
                </div>}
            </div>
        
    )
}
