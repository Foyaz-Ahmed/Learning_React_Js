import React,{Component} from 'react';

class State extends Component{

    constructor(){

        super();

        var obj = {
            name: "Foyaz Ahmed",
            age: [28, 24, 35, 40],
            height: "5'4",
            weight: {
                class8: "20kg",
                class9: ["30kg", "35kg","41kg", "47kg"],
                class10: "45kg"
            }
        }

        this.state = obj;
        // this.state = {
        //     name: "Foyaz Ahmed",
        //     age: 28,
        //     height: "5'4",
        //     weight: "58kg"
        // }

    }

    render(){

        return(
        <div>
             <h3>{this.state.name}</h3>
             <h3>{this.state.age[1]}</h3>
             <h3>{this.state.height}</h3>
             <h3>{this.state.weight.class9[3]}</h3>
        </div>   
        ); 
    }
}

export default State;