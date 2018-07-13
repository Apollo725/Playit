import React, { Component } from 'react';
import { Header } from '../../components/Header';
import { Brand } from '../../components/Brand';
import './style.scss';
import { SlideSideBar } from './SlideSideBar';

class OnBoardingArtist extends Component {
    render() {
        return (
            <div className="onBoardingWrapper">
                <Header />
                <div className="boardingContentWrapper">
                    <Brand />
                    <SlideSideBar className="slideBarWrapper"/>
                </div>
            </div>
        );
    }
}

export default OnBoardingArtist;