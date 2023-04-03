import React, { useState } from 'react'

function Comp() {
    const [name, setName] = useState('');
    const [dept, setDept] = useState('');
    const [rating, setRating] = useState('');
    const [data] = useState([]);

    const handleChange = (e) => {
        setName(e.target.value);
        // console.log(name);

        setDept(e.target.value);
        // console.log(dept);

        setRating(e.target.value);
        // console.log(rating);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const dataObj = {
            Name : name,
            Department : dept,
            Rating : rating
        }
        data.push(dataObj);
        console.log(data);
    }

    return (
        <div>
            <h1>Employee feedback form</h1>
            <form action="">
                <label htmlFor="Name">Name : </label>
                <input type="text" name='name' placeholder='Enter your Name' value={name} onChange=
                    {handleChange} />
                <br />
                <label htmlFor="Department">Department : </label>
                <input type="text" name='dept' placeholder='Enter your Department' value={dept} onChange={handleChange} />
                <br />
                <label htmlFor="Rating">Rating : </label>
                <input type="number" name='rating' placeholder='Enter your Rating' value={rating} onChange={handleChange} />
                <br />
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Comp
