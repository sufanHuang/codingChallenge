import React, { Component } from 'react'

export default class BaseLayout extends Component {

    render(){
        return(
            <div>
                <nav className= 'navbar'>
                    <h1>Welcome, please click an item to find others of the same type!</h1>

                </nav>

                <div>
                    {this.props.children}
                </div>

                <div className='footer'>
                    <p> @ 2020 Copyright Sufan Huang</p>
                </div>
            </div>
        )
    }
}
