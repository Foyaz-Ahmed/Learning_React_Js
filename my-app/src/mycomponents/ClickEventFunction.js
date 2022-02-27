import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function ClickEventFunction(){

    function doThis(a){
        alert(a);
    }
    return(
        <div>
            {/* if we use doThis() then the function called befor clicking the button */}
            {/* <button onClick={doThis()}>Click me</button> */}
            <button className='btn btn-primary m-5' onClick={doThis.bind(this,"I am from function")}>Click me</button>
        </div>
    );
}


export default ClickEventFunction;