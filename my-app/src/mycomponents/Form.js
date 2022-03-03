import React, { Component } from 'react';

class Form extends Component {

    constructor(){
        super();
        this.state ={
            username: ""
        }
    }

    changeName=(event)=>{
        //var getName = event.target.value;
        var name = event.target.name;
        var nameValue = event.target.value;

        this.setState(
            {
                [name]:nameValue
            }
        )

    }

    render() {
        return (
            <div>
                <form>
                    <p>{this.state.username}</p>
                    <input name="username" onChange={this.changeName} className='mt-2 mb-2' type="text" placeholder='your name'/><br/>
                    <input type = "submit" value="submit"/>
                </form>
            </div>
        );
    }
}

export default Form;