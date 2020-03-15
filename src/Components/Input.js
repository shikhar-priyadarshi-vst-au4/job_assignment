import React, { Fragment } from 'react';
import { FormControl } from 'react-bootstrap';

export function Input (Props) {
    return(
        <Fragment>
        {Props.for==="Board" && <FormControl 
         className="text-center "
         placeholder = "Board"
         name = "slateName"
         value = {Props.slateName} 
         onChange = {(e) => { Props.ChangeHandler(e) }}
         size={'lg'}/>}
       
        {Props.for==="List" && <FormControl 
         className="text-center "
         placeholder = "Listname"
         name = "listName"
         value = {Props.listName}
         onChange = {(e)=>Props.ChangeHandler(e)}
         size={'lg'}/>}
       
        {Props.for==="Task" && <FormControl 
         className="text-left  py-5"
         placeholder = "Add comments to this card"
         name = "taskName"
         value = {Props.taskName}
         onChange = {(e)=>Props.ChangeHandler(e)}
         size={'lg'}/>}

        {Props.for==="EditTask" && <FormControl 
         className="text-left  py-5 input_edit_task"
         name = "taskName"
         value = {Props.taskName}
         onChange = {(e)=>Props.ChangeHandler(e)}
         size={'sm'}
         />}

        </Fragment>
       
    )
}