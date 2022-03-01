import React, {Component} from "react";

class  ConditionalIfelse extends Component{
    
    constructor(){
        super();
        this.state = {
            login: false
        }
    }

    render(){
        //If , else always used before return if it is write in return view then not work.
        if(this.state.login == true){
            return (<button className="btn btn-danger btn-sm">Logout</button>)
        }
        else{
            return (<button className="btn btn-success btn-sm">Login  Now</button>)
        }
    }
}
export default ConditionalIfelse;