import React, { Component } from 'react';

class Form extends Component {

    constructor(){
        super();
        this.state ={
            name: ""
        }
    }

    changeName=(event)=>{
        var getName = event.target.value;

        this.setState(
            {
                name: getName
            }
        )
    }

    render() {
        return (
            <div>
                <form>
                    <p>{this.state.name}</p>
                    <input onChange={this.changeName} className='mt-2 mb-2' type="text" placeholder='your name'/><br/>
                    <input type = "submit" value="submit"/>
                </form>
            </div>
        );
    }
}

export default Form;