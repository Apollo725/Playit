import React, { Component } from 'react';
import './style.css';
import { Col, Container, Row, Footer, Button, FormInline } from 'mdbreact';
import blog from '../../assets/imgs/blog_icon.png';
import info from '../../assets/imgs/info_icon.png';
import facebook from '../../assets/imgs/facebook_icon.png';
import twitter from '../../assets/imgs/twitter_icon.png';
import spotify from '../../assets/imgs/spotify_icon.png';
import back from '../../assets/imgs/back_button.png';

class ContactUs extends Component {
    render() {
        return (
            <Footer className="font-small pt-4 mt-4">
                <Container fluid className="text-center text-md-left">
                    <Row>
                    <Col sm="2">
                        <p className="title">Contact Us</p>
                        <p>Us 111111111</p>
                        <p>Israel 111111111</p>
                        <p>information@playit.com</p>
                        <label for="submit">Subscription to newsletter</label>
                        <FormInline><input className="form-control form-control-sm" type="text" id="submit" /><Button class='contact_submit_btn'>send</Button></FormInline>
                        <p className="privacy_policy">Privacy policy | terms of use</p>
                    </Col>
                    <Col sm="2">
                        <ul>
                            <li className="list-unstyled blog_info">
                                <a href="#!"><img src={blog} /><p>blog</p></a>
                                <a href="#!"><img src={info} /><p>info</p></a>
                            </li>
                            <li className="list-unstyled">Share</li>
                            <li className="list-unstyled social_share">
                                <a href="#!"><img src={facebook} /></a>
                                <a href="#!"><img src={twitter} /></a>
                                <a href="#!"><img src={spotify} /></a>
                            </li>
                        </ul>
                    </Col>
                    <Col sm="2">
                        <ul>
                            <li className="list-unstyled breadcrumb_link" >
                                <a href="#!"><p>Profile</p></a>
                                <a href="#!"><p>Players</p></a>
                                <a href="#!"><p>Dashboard</p></a>
                            </li>
                            <li className="list-unstyled"><a href="#!"><p>Media</p></a></li>
                        </ul>
                    </Col>
                    <Col sm="2">
                        <a href="#" className="back_btn"><img src={back} /><p>Back</p></a>
                    </Col>
                    </Row>
                </Container>
            </Footer>
        );
    }
}

export default ContactUs;