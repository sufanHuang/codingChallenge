import React, { Component } from 'react'
import './index.css'
import { NavLink } from 'react-router-dom'

export default class BaseLayout extends Component {
    render(){
        return(
            <div>
                <nav className= 'navbar'>
                    <div className='nav-links'>
                        <ul>
                            <li><NavLink activeClassName ='selected' className = 'nav-link' exact to='/'>Home</NavLink></li>
                            <li><NavLink activeClassName ='selected' className = 'nav-link' exact to='/typeA'>TypeA</NavLink></li>
                            <li><NavLink activeClassName ='selected' className = 'nav-link' exact to='/typeB'>TypeB</NavLink></li>
                            <li><NavLink activeClassName ='selected' className = 'nav-link' exact to='/typeC'>TypeC</NavLink></li>
                            <li><NavLink activeClassName ='selected' className = 'nav-link' exact to='/typeD'>TypeD</NavLink></li>
                            <li><NavLink activeClassName ='selected' className = 'nav-link' exact to='/typeE'>TypeE</NavLink></li>

                        </ul>
                    </div>
                </nav>

                <div>
                    {this.props.children}
                </div>

                <div className='footer'>
                    <p> @ 2019 Copyright Sufan Huang</p>
                </div>
            </div>
        )
    }
}
