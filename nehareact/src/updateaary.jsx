import { useState } from "react";
import { Placeholder } from "react-bootstrap";

function UpdateArray() {
    const [data, setData] = useState([

        'neha', 'shalu', 'monty'
    ])
    const handleUser = (name) => {
        data[data.length - 1] = name;
        setData([...data]);

    }
    return (
        <div >
            <h2>update arry in states</h2>
            <br />
            <br />
            <input type="text" onChange={(event) => handleUser(event.target.value)}
                placeholder="enter user name"
            />
            <br />
            <br />            {
                data.map((item, index) => (
                    <h1 key={index}>{item}</h1>
                ))
            }


        </div >
    )
}


export default UpdateArray;