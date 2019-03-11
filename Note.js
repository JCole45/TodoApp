import React, { Component } from 'react';

class Note extends Component {



     render() {
        return (
             <div className="note" >
                {this.props.text} <button className="btn1" onClick={this.props.deleteMethod}> - </button>
             </div>
        );

     }
}
export default Note;
