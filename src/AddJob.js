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
                <label htmlFor="input" name="title" onChange={this.handleChange}>Title</label>
                <input type="text"/>
                <label htmlFor="input" name="pay">Compensation</label>
                <input type="text"/>
                <label htmlFor="input" name="description">Description</label>
                <textarea name="description" id="" cols="30" rows="10"></textarea>
                <button type="submit" onClick={this.handleSubmit}>Submit</button>
                </form>
                
        )
    }
}