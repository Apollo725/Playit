import React, { Component } from 'react';
import './style.css';
import Header from './HomeHeader';
//import Footer from './HomeFooter';

class Homepage extends Component {
    render() {
        return (
            <div className='wrapper'>
                <Header />

            </div>
        );
    }
}

export default Homepage;