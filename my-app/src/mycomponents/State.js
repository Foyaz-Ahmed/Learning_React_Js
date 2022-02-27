import React,{Component} from 'react';

class State extends Component{

    constructor(){

        super();
        this.state = {
            name: "Foyaz Ahmed",
            age: 28,
            height: "5'4",
            weight: "58kg"
        }

    }

    render(){

        return(<div>
             <h1>{this.state.name}</h1>
             <h1>{this.state.age}</h1>
             <h1>{this.state.height}</h1>
             <h1>{this.state.weight}</h1>
        </div>   
        ); 
    }
}

export default State;