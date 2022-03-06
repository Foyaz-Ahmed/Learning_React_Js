import React, { Component } from 'react';

class List extends Component {


    myDataChild=(data)=>{
        return <option>{data  + 10}</option>
    }

    
    render() {

        const Country = ["Bangladesh","India", "China", "Noakhali"];

        const dataItems = Country.map((data)=>{
            return <li>{data}</li>
        })

        //another process
        const number = [1, 2, 3, 4, 5, 6];
        const list = number.map(this.myDataChild);

        return (
            <div>
                <ol>
                    {dataItems}
                </ol>
                <br/>
                <select>
                    {list}
                </select>
            </div>
        );
    }
}

export default List;