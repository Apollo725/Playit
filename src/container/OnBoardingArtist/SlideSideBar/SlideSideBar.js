import React, { Component } from "react";
import Swiper from "react-id-swiper";

import {ConfirmEditYourInfo} from '../ConfirmEditYourInfo';

import "./style.scss";

class SlideSideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      tempComp : null,
      textArray: [
        { title: "Confirm or Edit Your info", index: 1 , component: 'ConfirmEditYourInfo'},
        { title: "Add or Edit your profile media2", index: 2 , component: 'ConfirmEditYourInfo1'},
        { title: "Confirm and Add unavailable dates3", index: 3 , component: 'ConfirmEditYourInfo1'},
        { title: "Confirm or Edit Your info4", index: 4 , component: 'ConfirmEditYourInfo1'},
        { title: "Confirm or Edit Your info5", index: 5 , component: 'ConfirmEditYourInfo1'},
        { title: "Confirm or Edit Your info6", index: 6 , component: 'ConfirmEditYourInfo1'}
      ]
    };
    this.handleClick = this.handleClick.bind(this);
    this.swiper = null;
  }
  componentDidMount() {
    this.setState(prevState => ({
      name: this.state.textArray[0].title,
      tempComp: this.state.textArray[0].component
    }));
  }
  handleClick = e => {
    this.setState(prevState => ({
      name: e.title,
      tempComp: e.component
    }));
  };
  createSlide = (e, handleClick) => {
    const textArray = this.state.textArray;
    let table = [];
    for (let i = 0; i < textArray.length; i++) {
      table.push(
        <div key={i}>
          {
            <div
              className="nav-item"
              onClick={this.handleClick.bind(this, textArray[i])}
            >
              {textArray[i].title}
              <span />
            </div>
          }
        </div>
      );
    }
    return table;
  };

  getChildComponent = (name) => {
    console.log("VIVEK")
    return ConfirmEditYourInfo
  }
  
  render() {
    let that = this;
    const params = {
      direction: "vertical",
      effect: "coveflow",
      slidesPerView: 3,
      spaceBetween: 1,
      speed: 1000,
      height: 200,
      loop: true,
      slideToClickedSlide: true,
      centeredSlides: true,
      on: {
        slideChange: function() {
          that.setState(prevState => ({
            name: that.state.textArray[this.realIndex].title,
            tempComp: that.state.textArray[this.realIndex].component
          }));
        }
      }
    };
    return (
      <div className="sliderContent">
        <Swiper
          {...params}
          ref={node => (node ? (this.swiper = node.swiper) : null)}
        >
          {this.createSlide()}
        </Swiper>
        <div className="sliderIndicate">
          {this.state.tempComp === "ConfirmEditYourInfo" ? <ConfirmEditYourInfo name={'vivek'}/> : null }
        </div>
      </div>
    );
  }
}

export default SlideSideBar;
