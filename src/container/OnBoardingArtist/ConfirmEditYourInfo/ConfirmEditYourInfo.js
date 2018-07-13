import React, { Component } from "react";
import PropTypes from 'prop-types';
import profile1 from '../../../assets/imgs/profile2.png';
import "./style.scss";

class ConfirmEditYourInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }
  componentDidMount() {
    console.log("VIVEK IN CHILD", this.props)
  }
  
  render() {
    
    return (
      <div className="ConfirmEditYourInfo">
        <div className="userProfileBox">
          <div className="userProfilePicture">
            <img src={profile1} alt=""/>
          </div>  
          <div className="userProfileDetail">
            <h2>Avner Hodorov</h2>
            <h3>Musician	| <span>Rock</span></h3>
            <div className="infoBox">
              <h3><i className="large facebook icon"></i> Tel Aviv, Israel</h3>
              <h3><i className="large facebook icon"></i> 7,000,000 </h3>
            </div>
            <h4>About</h4>
            <p>sensation at that moment might be expresed in the folowing words, "Well, there is no rehabilitating myself now. So let me shame them for all I am worht. I will show them I don't care what they think -- that's all!"He told the caochman to wait, while enevolen</p>
          </div>
        </div>
      </div>
    );
  }
}
ConfirmEditYourInfo.propTypes = {
  name: PropTypes.string.isRequired,
};


export default ConfirmEditYourInfo;
