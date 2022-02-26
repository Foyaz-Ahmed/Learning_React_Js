import React from 'react';

function ClickEventFunction(){

    function doThis(){
        alert("Clicked from Functional Event");
    }
    return(
        <div>
            {/* if we use doThis() then the function called befor clicking the button */}
            {/* <button onClick={doThis()}>Click me</button> */}
            <button onClick={doThis}>Click me</button>
        </div>
    );
}


export default ClickEventFunction;