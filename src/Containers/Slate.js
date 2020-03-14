import React, {Component, Fragment} from 'react';
import { createList, createTask, editTask } from '../Action/action';
import { connect } from 'react-redux';
import { SlateBoard }   from '../Components/SlateBoard';
class Slate extends Component{
    state={
      activateInput : false,
      addCardInput : false,
      editCardInput: false,
      cardListID:"",
      listName : "",
      taskName : "",
      labelName: ""
    }
     ChangeHandler(e){
         let { name, value } = e.target;
         this.setState({
             [name] : value
         })
     }
     async CreateList( ){
         await this.setState({ activateInput: false })
         let slateId = this.props.slate._id;
         let listName = this.state.listName;
         console.log(slateId);
         console.log(listName);
         this.props.dispatch(createList(slateId,listName));
     }
     async CreateTask ( id ) {
        let listId = id ;
        let { taskName, labelName } = this.state;
        this.props.dispatch(createTask( listId, taskName ));
     }

     async editTask ( id ) {
         //task id 
         console.log(id);
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
    async EditInput(){
       // document.querySelector('body').classList.add('BLUR');
        await this.setState({editCardInput : !this.state.editCardInput});
    }
    render(){
       
     return (
         <Fragment>
            <SlateBoard List={this.props.lists} 
             Task={this.props.tasks}
             {...this.state}
             CardInput = { (id) => this.CardInput(id)}
             EditInput = { ( ) => this.EditInput( )}
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