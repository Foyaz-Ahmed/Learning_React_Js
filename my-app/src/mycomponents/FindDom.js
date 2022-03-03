import React, { Component } from 'react';
import  ReactDOM  from 'react-dom';


class FindDom extends Component {

    changeImage(){
            var container = document.getElementById('name');
            ReactDOM.findDOMNode(container).innerHTML = "Hello"; 
    }
    
    render() {
        return (
            <div>
                <button onClick={this.changeImage} className='btn btn-success'>change image</button>
                <h2 id="name">Hello, Komola</h2>
            </div>
        );
    }
}

export default FindDom;