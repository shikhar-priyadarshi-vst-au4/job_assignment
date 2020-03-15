import React from 'react';
import { TaskListItem } from '../Components/TaskListItem';
export const ListItem = ( Props ) => {
    
    return (
        <div className = "board_list_elem" >
            <div className = "board_list_card">
                <ul className = "board_list_card_body" >
                      <li className="board_list_card_body_child my-2"> {Props.list.listName}</li>      
                       <TaskListItem {...Props} CardInput = {Props.CardInput} /> 
                </ul>
            </div>
            </div>
                   
        
    )
}