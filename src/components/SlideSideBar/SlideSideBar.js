import React, { Component } from "react";
import Swiper from "react-id-swiper";

import "./style.css";

class SlideSideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      textArray: [
        { title: "Confirm or Edit Your info1", index: 1 },
        { title: "Add or Edit your profile media2", index: 2 },
        { title: "Confirm and Add unavailable dates3", index: 3 },
        { title: "Confirm or Edit Your info4", index: 4 },
        { title: "Confirm or Edit Your info5", index: 5 },
        { title: "Confirm or Edit Your info6", index: 6 }
      ]
    };
    this.handleClick = this.handleClick.bind(this);
    this.swiper = null;
  }
  componentDidMount() {
    this.setState(prevState => ({
      name: this.state.textArray[0].title
    }));
  }
  handleClick = e => {
    this.setState(prevState => ({
      name: e.title
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
      centeredSlides: true,
      on: {
        slideChange: function() {
          that.setState(prevState => ({
            name: that.state.textArray[this.realIndex].title
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
          <div className="jumbotron item-description">
            <h1>{this.state.name}</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default SlideSideBar;
