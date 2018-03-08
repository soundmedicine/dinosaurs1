import React, { Component } from 'react'
import AddJob from './AddJob'


class JobList extends Component {
    constructor(props) {
        super(props)
        this.state = {jobs: []}

        this.handleSave = this.handleSave.bind(this)
    }

    componentDidMount() {
        return fetch('./listings.json')
        .then(response => response.json())
        .then(jobs => this.setState({jobs: jobs}))
    }

    handleSave(listing) {
        this.setState({jobs: [listing, ...this.state.jobs]})
    }

    render() {
        let jobs = this.state.jobs || {interested: []}
        return (
            <main>
                <section>
                    <ul className='jobs' id='job-listings'>
                    {jobs.map(job => {
                        return <li>
                                <h4>{job.title}</h4>
                                <small>{job.pay}</small>
                                <p>{job.description}</p>
                                <small>{job.interested.length} dinos are interested in the job.</small>
                                </li>
                        })}
                    </ul>
                </section>
                <aside id="side-bar">
                    <h3>Add a Job</h3>
                    <AddJob onSave={this.handleSave}/>
                </aside>
            </main>
        )
    }
}

export default JobList