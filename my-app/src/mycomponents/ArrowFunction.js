import React from 'react';

const ArrowFunction = (a)=>{
    alert(a);
}

const Arrow = ()=>{
    return(
        <div>
            <button className='btn btn-danger m-5' onClick={ArrowFunction.bind(this, "I am from Arrow Function")}>Click me</button>
        </div>
    );
}

export default Arrow;