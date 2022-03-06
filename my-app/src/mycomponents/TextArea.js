import React, { Component } from 'react';

class TextArea extends Component {

    constructor(){
        super();
        this.state ={
            desc :"please insert text",
            myText: ""

        }
    }
    onChangeHandler=(event)=>{
        var getText = event.target.value;
        this.setState({
            myText : getText
        });
    }
    render() {
        return (
            <div>
               <textarea onChange={this.onChangeHandler} placeholder="write massgae"/>
               <p>{this.state.myText}</p>
            </div>
        );
    }
}

export default TextArea;