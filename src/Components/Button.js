import React, { Fragment } from 'react';
import { Button} from 'react-bootstrap';

export const Key = ( Props ) => {
  
  return (
     <Fragment>

      { Props.for==='SlateBoard' && <Button variant="outline-dark" className="board_slateboard_key" size={'lg'}
       onClick = {( )=>Props.switchToInput( )}
       >Add List</Button>}
     
      {Props.for==='Board' && <Button variant="dark" className="px-5" size={'lg'}
     onClick = {( ) => { Props.ClickHandler( ) } }><i>Crea</i>te</Button>}
     
       {Props.for==='List' && <Button variant="dark" className="px-5 my-3" size={'lg'}
        onClick = {( ) => Props.CreateList(  )}
       >Add Card</Button>}
       
       {Props.for==='Task' && <Button variant="dark" className="px-5 my-3" size={'lg'}
        onClick = { ( )=> Props.CreateTask( Props.listId ) }
       >Add Task</Button>}
       
       {Props.for==='EditTask' && <Button variant="dark" className="px-2 my-2 " size={'sm'}
       onClick = {( ) => Props.editTask ( )}
       >Update</Button>}
     
     </Fragment>
    
 )
}