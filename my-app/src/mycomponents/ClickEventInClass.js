import React, {Component} from 'react';

class ClickEventInClass extends Component{

    doThis(){
        alert("Clicked form Class Event");
    }

    render(){
        return <div>
                     {/* if we use doThis() then the function called befor clicking the button */}
                     {/* <button onClick={doThis()}>Click me</button> */}
                    <button onClick={this.doThis}>Click me</button>
                </div>
    }

}

export default ClickEventInClass;