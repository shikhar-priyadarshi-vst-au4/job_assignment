const CREATE_BOARD = 'CREATE_BOARD';
const CREATE_LIST  = 'CREATE_LIST';
const CREATE_TASK  = 'CREATE_TASK';

const FETCH_BOARD  =  'FETCH_BOARD';
const FETCH_LIST   =   'FETCH_LIST';

const EDIT_TASK    =  'EDIT_TASK';
const ASSIGN_LABEL =  'ASSIGN_LABEL';

const ERROR_RESPONSE = 'ERROR_RESPONSE';

const options = {  method : 'post', headers : { 'Content-Type' : 'application/json' } };
//const optionsWithBody = () =>{  method : 'post', headers : { 'Content-Type' : 'application/json' } };

export const createBoard =  ( name ) => {
    
    return async dispatch => {
        try {
          let board = await fetch(`http://localhost:5000/slate/createslate/${name}`, options);
          let data = await board.json();
          console.log(data);
          return dispatch({ type : CREATE_BOARD, payload : data });
        }
        catch(err){
            return dispatch(errorResponse(err));
        }
    }
  
}


export const createList =  ( id , listName) => {
    console.log( id , listName );
    return async dispatch => {
      try {
          let list = await fetch(`http://localhost:5000/slate/viewslate/${id}/createlist`, 
          {  method : 'post', headers : { 'Content-Type' : 'application/json' }, body: JSON.stringify({listName}) });
          let data = await list.json();
          console.log('data.json---',data);
          return dispatch({ type : CREATE_LIST, payload : data });
        }
        catch(err){
            return dispatch(errorResponse(err));
        }   
    }
}


export const fetchBoard =  ( name ) =>{
        
        return async dispatch => {
             try {
                 let board = await fetch(`http://localhost:5000/slate/viewslate/${name}`, options);
                 let data = await board.json();
                 return dispatch({ type : FETCH_BOARD, paylaod : data });
             }
             catch (err){
                return dispatch(errorResponse(err));
             }
        }
}

export const fetchList =  ( id ) => {
    return async dispatch => {
        try {
            let list = await fetch(`http://localhost:5000/slate/viewlist/${id}`, options);
            let data = await list.json();
            return dispatch({ type : FETCH_LIST, payload : data });
          }
          catch(err){
              return dispatch(errorResponse(err));
          }   
      }
}

export const createTask =  ( id, taskName ) => {
    console.log('action-',id, taskName);
    return async dispatch => {
        try {
            let task = await fetch (`http://localhost:5000/slate/viewlist/${id}/createtask`,
            { method : 'post', headers : { 'Content-Type' : 'application/json' }, body: JSON.stringify({taskName}) });
            let data = await task.json();
            console.log('data.json-->',data);
            return dispatch({ type : CREATE_TASK, payload : data })
        }
        catch(err){
            return dispatch(errorResponse(err));
        }
    }
}

export const editTask =  ( id, taskName ) => {
    return async dispatch => {
        try {
            let task = await fetch (`http://localhost:5000/slate/task/${id}`,
            { method : 'post', headers : { 'Content-Type' : 'application/json' }, body: JSON.stringify({taskName}) });
            let data = await task.json();
            console.log('data.json-->',data);
            return dispatch({ type : EDIT_TASK, payload : data })
        }
        catch(err){
            return dispatch(errorResponse(err));
        }
    }
}

export const assignLabelToTask = ( id, labelName ) => {
      return async dispatch => {
           try{
              let data = await (await fetch( `http://localhost:5000/slate/task/${id}/label/${labelName}` , options )).json();
              console.log('assignLabelToTask',data);
              return dispatch ({ type : ASSIGN_LABEL, payload : data });
           }
           catch (err){
            return dispatch(errorResponse(err));
           }
      }
}

export const errorResponse = (err) => {
    return (
        {
            type : ERROR_RESPONSE,
            payload : err.message
        }
    )
}



/*

router.post('/viewslate/:slateName', controller.viewSlate); //show board
router.post('/createslate/:slateName', controller.createSlate); // create a board
router.post('/viewlist/:viewId', controller.viewList); //view List
router.post('/viewslate/:slateId/createlist', controller.createList); // create a list
router.post('/viewlist/:listId/createtask',controller.createTask); // create a Task and can assign
router.post('/task/:taskId', controller.editTask);
router.post('/movetasks/:listIdOne/:taskIdOne/:listIdTwo/:taskIdTwo', controller.moveTask);


*/

export  {
    CREATE_BOARD,
    CREATE_LIST ,
    CREATE_TASK ,
    FETCH_BOARD,
    FETCH_LIST ,
    EDIT_TASK ,
    ASSIGN_LABEL,
    ERROR_RESPONSE
}
