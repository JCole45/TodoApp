import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import {updateUser, apiRequest, addNote, plusNoteIn} from './actions/user-actions';
import {bindActionCreators} from 'redux';
import Items from './Items';


let valkre = []

class App extends Component {

  constructor(props) {
    super(props);

    this.onUpdateUser = this.onUpdateUser.bind(this);
    this.onAddNote = this.onAddNote.bind(this)
    this.additionBaby = this.additionBaby.bind(this)
    // this.onPlusNotesIn = this.onPlusNotesIn.bind(this)
}

    // onPlusNotesIn (event) {
    //  this.props.onPlusNotesIn(valkre);
    //  console.log(valkre)
    //  console.log(this.props.notes)
    // }

    additionBaby () {
     valkre.push(this.props.user)
     console.log(valkre);
     return valkre
}


   componentDidMount () {
    setTimeout (() =>{
      this.props.onApiRequest();
   },1500);
  }

  onAddNote () {

      // let arrAy= []
      // arrAy.push(this.props.user)
       console.log(this.props.user)
       console.log()
          };


  onUpdateUser(event) {
    this.props.onUpdateUser(event.target.value);
  }

  render() {
    let notes = valkre.map((val , key) => {
           return <Items key={key} text={val}
           deleteMethod={ () => this.deleteNote(key)}
           editMethod={ () => this.editNote(key)}/>
    })

    return (
      <div className="App">
        <header className="App-header">

        <input onChange={this.onUpdateUser} />
        <button onClick={this.additionBaby}> + </button>
        <button onClick={this.onUpdateUser}> submit </button>
        {this.props.user};
        {notes}

        </header>

      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({

    products: state.products,
    user: state.user,
    userPlusProps: `${state.user} ${props.aRandomProps}`

});



const mapActionsToProps =  {
  onAddNote: addNote,
  onUpdateUser: updateUser,
  onApiRequest: apiRequest,
  onPlusNotesIn: plusNoteIn
};


export default connect(mapStateToProps, mapActionsToProps)(App);
