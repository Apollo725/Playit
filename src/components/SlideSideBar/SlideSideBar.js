import React, { Component } from 'react';
import Slider from "react-slick";

import './style.css';

class SlideSideBar extends Component {
    render() {
        const settings = {
            className: "center",
            centerMode: true,
            infinite: false,
            centerPadding: "60px",
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 100,
            vertical: true,
            verticalSwiping: true,
            arrows: false,
            
          };
        return (
          <div className="sliderContent">
            <Slider {...settings} className="customSlider">
              <div className="sliderItem">
                <p className="sliderItemText">Confirm or Edit Your info1</p>
              </div>
              <div className="sliderItem">
                <p className="sliderItemText">Add or Edit your profile media2</p>
              </div>
              <div className="sliderItem">
                <p className="sliderItemText">Confirm and Add unavailable dates3</p>
              </div>
              <div className="sliderItem">
                <p className="sliderItemText">Confirm or Edit Your info4</p>
              </div>
              <div className="sliderItem">
                <p className="sliderItemText">Confirm or Edit Your info5</p>
              </div>
              <div className="sliderItem">
                <p className="sliderItemText">Confirm or Edit Your info6</p>
              </div>
              <div className="sliderItem">
                <p className="sliderItemText"></p>
              </div>
              <div className="sliderItem">
                <p className="sliderItemText"></p>
              </div>
            </Slider>
            <div className="sliderIndicate">
                <p>select</p>
            </div>
          </div>
        );
      }
}

export default SlideSideBar;