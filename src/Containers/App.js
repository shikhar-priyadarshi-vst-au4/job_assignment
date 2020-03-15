import React, {Component, Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from '../Components/Navbar';
import { Board } from '../Components/Board';
import { connect } from 'react-redux';
import { createBoard } from '../Action/action';
import '../Styles/App.css';
import { DragDropContext } from 'react-beautiful-dnd';
class App extends Component {
  state={
    slateName: ""
  }
  ClickHandler(){
    let slatename = this.state.slateName;
    console.log(slatename);
    this.props.dispatch(createBoard(slatename));  
  }
  ChangeHandler(e){
    let { name, value } = e.target;
    this.setState({
      [name] : value
    })
  }
  
  onDragEnd = result => {
    const { destination, source, draggableId } = result;
    console.log(destination, source, draggableId);
  }

  render(){
    console.log(this.props);
    let available = Boolean(Object.entries(this.props.slate).length); 
    let empty = !available;
    return (
      <Fragment >
        <NavBar/>
        <DragDropContext 
         onDragEnd = {this.onDragEnd}>
        <div className="mt-5" >
          
          { empty && 
          <Board 
          isCreated = { false }
          slateName = {this.state.slateName}
          ChangeHandler = {(e) => this.ChangeHandler(e)}
          ClickHandler = { ( ) => this.ClickHandler( ) }/> }   
          
          { available && <Board isCreated = { true } List={this.props.List} />}
        </div>
        </DragDropContext>
      </Fragment>
    ); 
  }
  
}

const mapStateToProps = ( state ) => {
     let { reducer } = state;
     let { slate, lists, tasks } = reducer;
     return { slate, lists, tasks }
    }

export default connect(mapStateToProps)(App);
