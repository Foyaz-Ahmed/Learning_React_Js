import React, {Component} from 'react';

class ClickEventInClass extends Component{

    doThis(a){
        alert(a);
    }

    render(){
        return <div>
                     {/* if we use doThis() then the function called befor clicking the button */}
                     {/* <button onClick={doThis()}>Click me</button> */}
                    <button onClick={this.doThis.bind(this, "I am from class")}>Click me</button>
                </div>
    }

}

export default ClickEventInClass;