import React, { Component } from 'react'
import './App.css'
import Header from './Header'
import JobList from './JobList'
import AddJob from './AddJob'
import Footer from './Footer'

class App extends Component {

  render() {
    return (
      
      <div className="App">
        <Header />
        <h2>Job Listings</h2>
        <JobList />
        <Footer />
      </div>
    )
  }
}

export default App;
