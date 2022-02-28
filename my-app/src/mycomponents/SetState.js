import React, {Component} from 'react';


class SetStateChnge extends Component{

    constructor(){
        super();
        this.state = {
            name: "Foyaz"
        }
    }
    changeName =(a)=>{

        this.setState(
            {name: a}
        )
    }
    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={this.changeName.bind(this, "Shakila")} className="btn btn-danger m-5">Change</button>
            </div>
        );
    }
}

export default SetStateChnge;