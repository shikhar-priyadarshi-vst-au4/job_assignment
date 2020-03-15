import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { Card } from 'react-bootstrap';
import { Input } from './Input';
import { Key } from './Button';
export const TaskListItem = ( Props ) => {
    let labels = ['Completed','Pending','Active','Priority']; 
    return(
        <Fragment>
           { Props.task.length>0 && Props.task.map(val=>(val.listId===Props.list._id)?< Card key={val._id} >
            <Card.Body>
               <small><b>{val.labelName}</b></small><br/>  
                <div className="d-flex justify-content-between">
                <div>{val.taskName}</div>
                <div ><FontAwesomeIcon icon={faEdit}
                 onClick={( )=>Props.EditInput( val._id )}/></div>
                </div>
                 {Props.editCardInput && Props.cardTaskID === val._id && <div className="EditTask d-flex justify-content-start"> 
                                           <div>
                                           { Props.emptyField && <div className="d-flex flex-column">
                                                <small className = {'errorField'} >
                                                        Field is empty</small>
                                                <small className = {'error'} ></small>
                                                
                                                </div> }
                    
                                           <Input for={'EditTask'}
                                                 ChangeHandler = {Props.ChangeHandler} />
                                                 <Key for={'EditTask'}
                                                    editTask  = { Props.editTask } />
                                           </div>
                                           <div>
                                               <ul className="list">
                                                 {labels.map((value, index)=> <li key={value} className="listItems"
                                                 onClick = {()=> Props.assignLabelToTask( val._id, value ) }>
                                                     {value}</li>)} 
                                               </ul>
                                           </div>
                                                 </div> }
                
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
