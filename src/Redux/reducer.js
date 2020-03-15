import { 
    CREATE_BOARD,
    CREATE_LIST ,
    CREATE_TASK ,
    FETCH_BOARD,
    FETCH_LIST ,
    EDIT_TASK ,
    ASSIGN_LABEL,
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
            
            case EDIT_TASK :
             stateCopy.tasks = stateCopy.tasks.map(val => {
                 if(val._id===action.payload._id){
                     val.taskName = action.payload.taskName;
                     console.log(val);
                 }
                 return val;
             });   
             return stateCopy;
            case ASSIGN_LABEL :
                stateCopy.tasks = stateCopy.tasks.map(val => {
                    if(val._id === action.payload._id){
                        val.labelName = action.payload.labelName;
                    }
                    return val;
                })
                return stateCopy;
            default :
             return stateCopy; 
            
            }
} 