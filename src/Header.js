import React, { Component } from 'react'
import logo from './assets/g-dino.png'

class Header extends Component {
    render() {
        return (
            <div className="header">
                <img src={logo} className="App-logo" alt="logo" />
                </div>
        )
    }
}

export default Header