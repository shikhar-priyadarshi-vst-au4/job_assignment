import { 
    CREATE_BOARD,
    CREATE_LIST ,
    CREATE_TASK ,
    FETCH_BOARD,
    FETCH_LIST ,
   // EDIT_TASK ,
   // ERROR_RESPONSE
} from '../Action/action';


const initialState = {
    slate : {},
    lists : [],
    tasks : []
}

/*
slate = {

}
*/

export const reducer = ( state = initialState, action ) =>{
          let stateCopy = {...state};
          console.log(action);
          switch(action.type){

            case CREATE_BOARD :
            case FETCH_BOARD :
            stateCopy.slate = { ...action.payload }     
            console.log(stateCopy);
            return stateCopy;
            
            case CREATE_LIST:
            case FETCH_LIST:  
            stateCopy.lists=[...stateCopy.lists, action.payload];
            console.log(stateCopy);
            return stateCopy;
            
            case CREATE_TASK:
            stateCopy.tasks=[...stateCopy.tasks, action.payload];  
            return stateCopy;

            default :
             return stateCopy; 
            
            }
} 