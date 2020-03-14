import React, { Fragment } from 'react';
import { List } from './List';
import { Key } from './Button';
import { Input } from './Input';
export const SlateBoard = ( Props ) => {
    console.log('SlateBoard',Props);
    return(
        
            <div className="board">
               { Props.List.length>0 && <div className="board_list">
                
                <List  List={Props.List} 
                       Task = {Props.Task}
                       cardListID = {Props.cardListID}
                       CardInput = {Props.CardInput} 
                       EditInput = {Props.EditInput}
                       addCardInput = {Props.addCardInput}
                       editCardInput = {Props.editCardInput}
                       taskName = {Props.taskName} 
                       labelName = {Props.labelName} 
                       CreateTask = { Props.CreateTask }
                       switchCardInput = { Props.switchCardInput }
                       ChangeHandler = {Props.ChangeHandler}/>
                
                </div>}
               
              { Props.activateInput && <div className= "board_input_key">  
                 
                 
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
