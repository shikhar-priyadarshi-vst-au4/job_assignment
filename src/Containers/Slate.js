import React, {Component, Fragment} from 'react';
import { createList, createTask, editTask, assignLabelToTask } from '../Action/action';
import { connect } from 'react-redux';
import { SlateBoard }   from '../Components/SlateBoard';
class Slate extends Component{
    
    state={
    
      activateInput : false,
      addCardInput : false,
      editCardInput: false,
      emptyField:false,
      cardTaskID:"",
      cardListID:"",
      listName : "",
      taskName : "",
      labelName: "",
      
  
    }

     ChangeHandler(e){
         let { name, value } = e.target;
         this.setState({
             [name] : value
         })
     }

     async CreateList( ){
        
         let slateId = this.props.slate._id;
         let listName = this.state.listName;
         if(listName.length>0){
            await this.setState({ activateInput: false, emptyField : false });
            this.props.dispatch(createList(slateId,
            listName))
         }
            else{
                this.setState({emptyField : true});
            }
     }

     async CreateTask ( id ) {
        let listId = id ;
        let { taskName, labelName } = this.state;
        this.props.dispatch(createTask( listId, taskName ));
     }

    switchToInput(){
      this.setState({activateInput : true})
    }

    async CardInput(id){
        if(id){
            await this.setState({ cardListID : id });      
        }

      await this.setState({addCardInput : !this.state.addCardInput }); 
    }

    async switchCardInput(id){
        await this.setState({ cardListID : id,
        taskName : "" });
    }

    async EditInput( id ){
        await this.setState({
            taskName:"",
            editCardInput : true,
            cardTaskID : id 
        });
    }
    async editTask ( ) {
        let id = this.state.cardTaskID;
        let taskName = this.state.taskName;
        if(taskName.length > 0){
            await this.props.dispatch(editTask( id, taskName ));
            await this.setState({ editCardInput : false,
            taskName : "", emptyField : false });
        }
        else{
            await this.setState({
                emptyField : true
            })
        }
    }
    async assignLabelToTask ( id , labelName){
        console.log( 'assignLabelToTask',id , labelName );
        this.props.dispatch(assignLabelToTask( id, labelName ));
    }
    render(){
       
     return (
         <Fragment>
            <SlateBoard List={this.props.lists} 
             Task={this.props.tasks}
             {...this.state}
             CardInput = { (id) => this.CardInput(id)}
             EditInput = { ( id ) => this.EditInput( id )}
             editTask  = { ( ) => this.editTask( )}
             assignLabelToTask = { ( id, labelName ) => this.assignLabelToTask(id, labelName) }
             ChangeHandler = {(e) => this.ChangeHandler(e)}
             CreateList = {( ) => this.CreateList( )}
             CreateTask = {( id ) => this.CreateTask ( id )}
             switchToInput = {( ) => this.switchToInput( )}
             switchCardInput = {( id ) => this.switchCardInput( id )}
             />          
         </Fragment>
     )
 }
}
const mapStateToProps = ( state ) => {
    let { reducer } = state;
     let { slate, lists, tasks } = reducer;
     return { slate, lists, tasks }

}
export default connect( mapStateToProps )(Slate);