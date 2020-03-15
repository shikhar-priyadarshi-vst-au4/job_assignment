import React, { Fragment } from 'react';
import { ListItem } from './ListItem';
export const List = ( Props ) => {
  
  return (
     <Fragment>
         
         { Props.List.map((list)=>
          
          <ListItem key={list._id} list={list}
            task = {Props.Task}
            emptyField = { Props.emptyField }
            cardListID = {Props.cardListID}
            CardInput = {Props.CardInput}
            EditInput = {Props.EditInput} 
            editTask  = { Props.editTask }
            assignLabelToTask = { Props.assignLabelToTask }
            cardTaskID = { Props.cardTaskID }
            addCardInput = {Props.addCardInput} 
            editCardInput = {Props.editCardInput}
            taskName = {Props.taskName} 
            labelName = {Props.labelName}
            CreateTask = {Props.CreateTask}
            ChangeHandler = {Props.ChangeHandler}
            switchCardInput = { Props.switchCardInput}  />
          
          )}
         
     </Fragment>
 )
}

