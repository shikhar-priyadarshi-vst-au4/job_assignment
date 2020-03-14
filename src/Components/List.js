import React, { Fragment } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { ListItem } from './ListItem';
export const List = ( Props ) => {
  console.log('List', Props);
  return (
     <Fragment>
         
         { Props.List.map((list)=>
          
          <ListItem key={list._id} list={list}
            task = {Props.Task}
            cardListID = {Props.cardListID}
            CardInput = {Props.CardInput}
            EditInput = {Props.EditInput} 
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

