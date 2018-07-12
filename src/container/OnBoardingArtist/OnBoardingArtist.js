import React, { Component } from 'react';
import { Header } from '../../components/Header';
import { Brand } from '../../components/Brand';
import './style.css';
import { SlideSideBar } from '../../components/SlideSideBar';

class OnBoardingArtist extends Component {
    render() {
        return (
            <div className="onBoardingWrapper">
                <Header />
                <Brand />
                <SlideSideBar className="slideBarWrapper"/>
            </div>
        );
    }
}

export default OnBoardingArtist;