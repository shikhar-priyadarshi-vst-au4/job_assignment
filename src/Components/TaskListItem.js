import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { Card } from 'react-bootstrap';
import { Input } from './Input';
import { Key } from './Button';
export const TaskListItem = ( Props ) => {
     console.log(Props);

    return(
        <Fragment>
           { Props.task.length>0 && Props.task.map(val=>(val.listId===Props.list._id)?< Card key={val._id} >
            <Card.Body >
               <small><b>{val.labelName}</b></small><br/>  
                <div className="d-flex justify-content-between">
                <div>{val.taskName}</div>
                <div onClick={( )=>Props.EditInput( )}><FontAwesomeIcon icon={faEdit}/></div>
                </div>
                 {Props.editCardInput && <Input for={'EditTask'}
                                                ChangeHandler = {Props.ChangeHandler} />}
                
            </Card.Body>
        </Card> : "" ) }

       {Props.addCardInput && Props.cardListID === Props.list._id && !Props.editCardInput && <div> 
                      <Input for={'Task'} 
                       ChangeHandler = {Props.ChangeHandler} 
                       taskName = {Props.taskName} 
                       labelName = {Props.labelName}/>
                       
                       <Key for={'Task'} 
                       CreateTask={Props.CreateTask}
                       listId={Props.list._id}/>
                       <span className="text-bolder del text-dark"
                       onClick={() => Props.CardInput()}> &#9587;</span>
                       </div>}
       
       
       { !Props.addCardInput && <div>
            <div className="text-dark d-flex justify-content-evenly  task_card_list">
               <div  className="task_card_list_add"
               onClick={() => Props.CardInput(Props.list._id) }><b> &#43;</b>  Add a card</div> 
               <div className="text-dark task_card_list_label">label</div>
            </div>
        </div> }
        
        {Props.cardListID !== Props.list._id && Props.addCardInput && 
                <div>
            <div className="text-dark d-flex justify-content-evenly  task_card_list">
               <div  className="task_card_list_add"
               onClick={() => Props.switchCardInput(Props.list._id) }><b> &#43;</b>  Add a card</div> 
               <div className="text-dark task_card_list_label">label</div>
            </div>
            </div>}
        </Fragment>
    )
}
