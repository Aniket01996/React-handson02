import React, { Component } from 'react'

export class ClassComp extends Component {
    state = {
        name: "",
        dept: "",
        rating: "",
        data: []
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        this.setState({ [e.target.dept]: e.target.value })
        this.setState({ [e.target.rating]: e.target.value })
    }
    handleSubmit = () => {
        const dataObj = {
            name: this.state.name,
            dept: this.state.dept,
            rating: this.state.rating
        }
        const arr = this.state.data;
        arr.push(dataObj);
        this.setState({ [this.state.data]: arr })
        console.log(this.state.name);
        console.log(this.state.data);
    }

    render() {
        return (
            <>
                <div className='main'>
                    <h1>EMPLOYEE &nbsp; FEEDBACK &nbsp; FORM</h1>
                    <label htmlFor="Name">Name : </label>
                    <input type="text" name="name" placeholder='Enter your Name' onChange={this.handleChange} />
                    <br />
                    <label htmlFor="Department">Department : </label>
                    <input type="text" name="dept" placeholder='Enter your Department' onChange={this.handleChange} />
                    <br />
                    <label htmlFor="Rating">Rating : </label>
                    <input type="number" name="rating" placeholder='Enter your Rating' onChange={this.handleChange} />
                    <br />
                    <button onClick={this.handleSubmit}>Submit</button>
                    <br />
                    <div className="container">
                        {this.state.data.map((item, index) => {
                        return (
                            <div className='inputs' key={index}> Name : {item.name} | Department : {item.dept} | Rating : {item.rating}</div>
                        )
                    })}
                    </div>
                </div>
            </>
        )
    }
}

export default ClassComp
