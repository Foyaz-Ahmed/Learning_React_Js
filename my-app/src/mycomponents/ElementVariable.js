import React, {Component} from "react";

class  Element extends Component{
    
    constructor(){
        super();
        this.state = {
            login: true
        }
    }

    render(){
        //element variable can be used in return.
        return( 
            this.state.login?
            (<h1>Logged In Successful</h1>)
            :
            (<h1>Logged In Failed</h1>)
        );
    }
}
export default Element;