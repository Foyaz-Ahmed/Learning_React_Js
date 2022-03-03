import React, { Component } from 'react';
import  ReactDOM  from 'react-dom';

class Render extends Component {

  myFunc = ()=>{

    var container = document.getElementById('name');
    var element = <h5>This is Shakila, from Noakhali</h5>

    var callBack = function(){
        alert('I am calling from call back function');
    }
    //render and hydrate method are same working procedure and same code...
    //ReactDOM.render(element, container, callBack);
    ReactDOM.hydrate(element, container, callBack);
   }

    render() {
        return (
            <div>
                <button  onClick={this.myFunc} className='btn btn-success'>Change</button>
                <h1 id="name">This is Foyaz, from Dhaka</h1>
            </div>
        );
    }
}

export default Render;