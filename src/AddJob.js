import React, { Component } from 'react'

export default class AddJob extends Component {
    constructor({onSave}) {
        super(arguments[0])

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.onSave({...this.state})
        this.setState({
            title: '',
            pay: '',
            description: '',
            interested: []
        })
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        return (
            <form action="submit" className="job-form">
                <label htmlFor="title">Title</label>
                <input type="text" name="title" onChange={this.handleChange}/>
                <label htmlFor="pay">Compensation</label>
                <input type="text" name="pay" onChange={this.handleChange}/>
                <label htmlFor="description" name="description" onChange={this.handleChange}>Description</label>
                <textarea name="description" onChange={this.handleChange} id="" cols="30" rows="10"></textarea>
                <input type="submit" name="submit" value="Submit" onClick={this.handleSubmit}></input>
                </form>
                
        )
    }
}