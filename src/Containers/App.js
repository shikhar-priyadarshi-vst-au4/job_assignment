import React, {Component, Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from '../Components/Navbar';
import { Board } from '../Components/Board';
import { connect } from 'react-redux';
import { createBoard } from '../Action/action';
import '../Styles/App.css';
import { Container, Row, Col } from 'react-bootstrap';
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
  
  render(){
    let available = Boolean(Object.entries(this.props.slate).length); 
    let empty = !available;
    return (
      <Fragment >
        <NavBar/>
        <div className="mt-5" >
          
          { empty && 
          <Board 
          isCreated = { false }
          slateName = {this.state.slateName}
          ChangeHandler = {(e) => this.ChangeHandler(e)}
          ClickHandler = { ( ) => this.ClickHandler( ) }/> }   
          
          { available && <Board isCreated = { true } List={this.props.List} />}
        </div>
        
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
