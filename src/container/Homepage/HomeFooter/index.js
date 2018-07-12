import React, { Component } from 'react';
import ContactUs  from '../../../components/ContactUs';
import './style.css';

class HomeFooter extends Component {
    render() {
        return (
            <div className="homeFooter">
                <ContactUs />          
            </div>
        );
    }
}

export default HomeFooter;