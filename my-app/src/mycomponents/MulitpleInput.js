import React, { Component } from 'react';

class MulitpleInput extends Component {

    constructor(){
        super();

        this.state = {
            fname:"",
            email:"",
            phone:"",
            position:""
        }
    }

    onChangeFunction=(event)=>{

        var inputName = event.target.name;
        var inputValue = event.target.value;

        this.setState({[inputName]: inputValue});

        if(inputName === "fname")
        {
            
           var namePattern = /^[a-zA-Z ]{2,30}$/;
           console.log(inputValue);
            if(!namePattern.test(inputValue))
            {
                this.setState({fname: "Please Enter Valid Name"});
            }
        }

        if(inputName === "email")
        {
            var emailPattern =   /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;

            if(!emailPattern.test(inputValue))
            {
                this.setState({email: "Enter Valid Email"});

            }
        }

        if(inputName === "phone")
        {
            
            const phonePattern = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
            
            if(!phonePattern.test(inputValue) || !Number(inputValue))
            {
                this.setState({phone: "Enter Valid Phone Number"})
            }

        }

        if(inputName === "position")
        {
            if(inputValue == null)
            {
                this.setState=({position: "Enter the Position"})
            }
        }

        
    }

    render() {
        return (
            <div>
                <p>Full Name:{this.state.fname}</p>
                <p>Email:{this.state.email}</p>
                <p>Phone:{this.state.phone}</p>
                <p>Position:{this.state.position}</p>
                <form>
                    <input onChange={this.onChangeFunction} name="fname" className='mt-2' type="text" placeholder='Full Name'/><br/>
                    <input onChange={this.onChangeFunction}  name="email" type="text" placeholder='Email'/><br/>
                    <input onChange={this.onChangeFunction}  name="phone" type="text" placeholder='Phone Number'/><br/>
                    <input onChange={this.onChangeFunction}  name="position" type="text" className= 'mb-2' placeholder='Playing Type'/><br/>
                    <input  type="submit" value="submit"/>
                </form>
            </div>
        );
    }
}

export default MulitpleInput;