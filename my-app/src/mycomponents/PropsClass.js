import React, {Componenet, Component} from "react";

class PropsClass extends Component{

    render(){
        return <h1>This is {this.props.name}</h1>
    }
}

export default PropsClass;