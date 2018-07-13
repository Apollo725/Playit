import React, { Component } from 'react';
import { NavbarBrand } from 'mdbreact';
import './style.scss';

class Brand extends Component {
    render() {
        return (
            <div className="brandBar">
                <NavbarBrand href="#" className="brandBarItem">YOU</NavbarBrand>
                <NavbarBrand href="#" className="brandBarItem">PLAYS</NavbarBrand>
            </div>
        );
    }
}

export default Brand;