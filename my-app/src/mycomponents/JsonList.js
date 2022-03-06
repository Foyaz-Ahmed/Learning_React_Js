import React, { Component } from 'react';



class JsonList extends Component {
    render() {

        const nameList = 
        [
            {
               name: "Foyaz",
               age: 23     
            },
            {
                name: "Bulbul",
                age: 24    
             },
             {
                name: "Mahin",
                age: 25     
             },
        ]
        const nameItems = nameList.map((data)=>{
                return <option>{data.name}</option>
        });

        const ageItems = nameList.map((data)=>{
            return <option>{data.age}</option>
        });

        return (
            <div>
                <select>
                    {nameItems}
                </select>
                <select>
                    {ageItems}
                </select>
            </div>
        );
    }
}

export default JsonList;