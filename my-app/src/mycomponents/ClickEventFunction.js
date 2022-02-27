import React from 'react';

function ClickEventFunction(){

    function doThis(a){
        alert(a);
    }
    return(
        <div>
            {/* if we use doThis() then the function called befor clicking the button */}
            {/* <button onClick={doThis()}>Click me</button> */}
            <button onClick={doThis.bind(this,"I am from function")}>Click me</button>
        </div>
    );
}


export default ClickEventFunction;