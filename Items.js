import React, { Component } from 'react';


class Items extends Component {



  render() {

    return (
      <div className="List">
        <header className="App-header">
        <div className="items">

        
        <button className="btn1" onClick={this.props.deleteMethod}> - </button>
        <button className="edit" onClick={this.props.editMethod}> edit </button>

      </div>
        </header>

      </div>
    );
  }
}


export default Items;
