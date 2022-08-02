import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../src/mediaQuery.css"


function Home() {
    return (
        <>
            <div className="background-img" >
                <div className="main-head" >
                    <h1 style={{ fontSize: '80px' }}>Christ Church</h1>
                    <p style={{ fontSize: '40px' }}>Drigh Road</p>
                </div>
            </div>
            <div className="container1">
                <h1>Christ Church (Drigh Road) is a Diocies Church of Pakistan,</h1>
                <h1> a church that loves God and people.</h1>
                <p>The Church of Pakistan is a united Protestant Church in Pakistan, which is part of the Anglican Communion and a member
                    of the World Communion of Reformed Churches and the World Methodist Council. It was established in 1970 with a union of
                    Anglicans (Church of India, Pakistan, Burma and Ceylon), Scottish Presbyterians (Church of Scotland), United Methodists, and Lutherans. It is the only united Protestant Church in South Asia which involves Lutherans.
                </p>
            </div>
            <Row className="container2">
                <Col md={7} style={{paddingBottom: '200px', paddingTop: '200px', alignItems: 'center'}}>
                <h1>Church Building's History</h1>
                <p style={{paddingTop: '30px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                     Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </Col>
                <Col md={5} className="church-img">
                </Col>
            </Row>
            <div className="container1">
                <h1>Christ Church (Drigh Road) is a Diocies Church of Pakistan,</h1>
                <h1> a church that loves God and people.</h1>
                <p>The Church of Pakistan is a united Protestant Church in Pakistan, which is part of the Anglican Communion and a member
                    of the World Communion of Reformed Churches and the World Methodist Council. It was established in 1970 with a union of
                    Anglicans (Church of India, Pakistan, Burma and Ceylon), Scottish Presbyterians (Church of Scotland), United Methodists, and Lutherans. It is the only united Protestant Church in South Asia which involves Lutherans.
                </p>
            </div>
            <div className="container3">
                <h4>EMAIL NEWSLETTER</h4>
                <h1 style={{fontSize: '60px', marginBottom: '30px'}}>Stay Connected</h1>
                <input className='form-src' type="text" placeholder="Email Address" />
                <button id="btn">
                    <a href="">Subscribe</a>
                </button>

            </div>
            <div className="container4">
                <Row>
                    <Col md={3}>
                        <h4>ABOUT</h4>
                        <p>Christ Church's mission is revival the personal, regional, and global expansion of God's kingdom through His manifest presence.</p>
                       
                    </Col>
                    <Col md={3}>
                        <h4 style={{marginBottom: '20px'}}>CONNECT</h4>
                        <p>Weekends</p>
                        <p>Get Involved</p>
                        <p>Calender</p>
                        <p>Featured Events</p>
                        <p>Schools</p>
                        <p> Contact Us</p>
                    </Col>
                    <Col md={3}>
                        <h4 style={{marginBottom: '20px'}}>MORE</h4>
                        <p>Give</p>
                        <p>Careers</p>
                        <p>News</p>
                        <p>Privacy</p>
                        <p>Terms</p>
                    </Col>
                    <Col md={3}>
                        <h4 style={{marginBottom: '20px'}}>SOCIAL</h4>
                        <p>Facebook</p>
                        <p>Instagram</p>
                        <p>Twitter</p>
                        <p>Youtube</p>
                    </Col>
                </Row>

                <p style={{marginTop: '120px'}}>© 2022 Christ Church.com. All Rights Reserved.</p>
            </div>
        </>
    );
}

export default Home;