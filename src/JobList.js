import React, { Component } from 'react'

class JobList extends Component {
    constructor(props) {
        super(props)
        this.state = {jobs: []}
    }
    componentDidMount() {
        return fetch('./listings.json')
        .then(response => response.json())
        .then(jobs => this.setState({jobs: jobs}))
    }

    render() {
        return (
            <div className='jobs'>
            {/* {jobs} */}Hellooooo
            </div>
        )
    }
}

export default JobList