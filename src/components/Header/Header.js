import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, Collapse, NavbarToggler } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

import './style.scss';

import logo from '../../assets/imgs/logo.png';
import profile from '../../assets/imgs/profile1.png'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    render() {
        return (
            <Router>
                <Navbar color="elegant-color" dark expand="md" scrolling>   
                    <NavbarBrand href="#">
                        <img src={logo} height="30" alt=""/>
                    </NavbarBrand>
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav left>
                            <NavItem className="navItem">
                                <NavLink to="#">DASHBOARD</NavLink>
                            </NavItem>
                            <NavItem className="navItem">
                                <NavLink to="#">INBOX</NavLink>
                            </NavItem>
                        </NavbarNav>
                        <NavbarNav right>
                            <NavItem className="navItem">
                                <NavLink to="#">HELP</NavLink>
                            </NavItem>
                            <NavItem className="navItem">
                                <img src={profile} className="rounded-circle z-depth-1-half navAvatar" alt=""/>
                            </NavItem>
                        </NavbarNav>
                    </Collapse>
                </Navbar>
            </Router>
        );
    }
}

export default Header;