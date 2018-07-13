import React, { Component } from 'react';
import logo from '../../../assets/imgs/logo.png';
import { Link } from 'react-router-dom';
import  CustomPopup  from '../../../components/Popup';
import { Button, Checkbox, Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getProfiles } from '../../../actions/actions';
import './style.scss';
import host from '../../../assets/imgs/host.png';
import artist from '../../../assets/imgs/artist.png';

class HomeHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginSuccessed: false,
            selectedProfileFlag : false,
            selectedProfileItem: null
        };
        this.loginHandler = this.loginHandler.bind(this);
        this.cardHandler = this.cardHandler.bind(this);
        this.backHandle = this.backHandle.bind(this);
    }
    componentDidMount() {
        this.props.getProfiles();
    }
    // facebook login Event
    loginHandler = () => {
        this.setState({loginSuccessed: true});
    }
    // profile Image Click Event
    cardHandler = (item) => {
        console.log("card*******", item);
        this.setState({selectedProfileItem: item});
    }

    backHandle = () => {
        this.setState({selectedProfileItem: null});
    }

    render() {
        let popupContent;
        const {profiles} = this.props;
        const {loginSuccessed, selectedProfileItem} = this.state;
        let facebookCheckboxLabel = <label className='termsLabel'>
                                        <span>By signing up, you agree to Playit's</span>
                                        <p>Terms of use and Privacy Policy</p>
                                    </label>
        let loginButton = <a className='link'>Login</a>
        let facebookPopup = <div>
                                <Button color='facebook' size='big' className='facebookButton' onClick={this.loginHandler}>
                                <i className="large facebook icon"></i>
                                    <span>Log in with Facebook</span>
                                </Button>
                                <Checkbox label={facebookCheckboxLabel} />
                            </div>
        let profilesList = <div className='profileCardGroupWrapper'>
                                <label>Click your profile to log in</label>
                                <Card.Group className='profileCardGroup' >
                                { profiles.map((item) => {
                                    return <Card className='profileCard' onClick={() => this.cardHandler(item)} >
                                                <Image src={require('../../../assets' + item.picture_url)} />
                                                <Card.Content>
                                                    <p style={{color: 'black'}}>{item.name}</p>
                                                </Card.Content>
                                            </Card>
                                    })
                                }
                                </Card.Group>
                            </div>
        
        if (loginSuccessed && profiles) {
            // profile to log in PopUp
            popupContent = profilesList;
            if (selectedProfileItem) {
                // log in as PopUp
                console.log("this is selected profileItem", selectedProfileItem);
                const back = '<<back';
                popupContent = <div className='profileCardWrapper'>
                                    <Button onClick={this.backHandle}>{back}</Button>
                                    <Card className='selectedProfileCard'>
                                        <Image src={require('../../../assets' + selectedProfileItem.picture_url)} />
                                        <Card.Content>
                                            <p style={{color: 'black'}}>{selectedProfileItem.name}</p>
                                        </Card.Content>
                                    </Card>
                                    <label>Login in as a</label>
                                    <div className='loginAsBar'>
                                        <a href="#!"><img src={host} alt=''/><p>host</p></a>
                                        <a href="#!"><img src={artist} alt=''/><p>artist</p></a>
                                    </div>
                                    <Checkbox label='Remember my selection' />
                                </div>
            } 
        } else {
            // facebook login PopUp
            popupContent = facebookPopup
        }

        return (
            <div className='headerWrapper'>
                <div className='headerLogo'>
                    <img src={logo} className='logo' alt=''/>
                </div>
                <div className='headerMenu'>
                    <ul className='menuList'>
                        <li>{console.log("popup+++++++++", popupContent)}
                            <CustomPopup 
                                triggerContent={loginButton} 
                                popupContent={popupContent}>
                            </CustomPopup>
                        </li>
                        <li><Link to='/onboardingartist' className='link'>About</Link></li>
                        <li><Link to='/faq' className='link'>FAQ</Link></li>
                        <li><Link to='/contact' className='link'>Contact Us</Link></li>
                        <li><Link to='/blog' className='link'>Add blog</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        // languages: state.languages.data,
        // lexicon: state.lexicon.data,
        profiles: state.profiles
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getProfiles: bindActionCreators(getProfiles, dispatch),
    }
}
HomeHeader.propTypes = {
    getProfile: PropTypes.func.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);