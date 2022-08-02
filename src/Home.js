import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../src/mediaQuery.css"
import Church from './img/church-img.jpg'
import BibleStudy2 from './img/Bible-study2.jpg'
import School from './img/school-img.jpg'
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";

function Home() {
    return (
        <>
            <div className="background-img" >
                <div className="main-head" >
                    <h1 style={{ fontSize: '80px' }}>Christ Church</h1>
                    <p style={{ fontSize: '40px' }}>Drigh Road </p>
                    <div className="btn-div">
                    <button className="main-btn">
                        <a href="">Watch Sermons</a>
                    </button>
                    <button className="main-btn2">
                        <a href="">Learn More</a>
                    </button>
                    </div>
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
                <Col md={7} style={{ paddingBottom: '200px', paddingTop: '200px', alignItems: 'center'}}>
                <h1 style={{fontSize: '55px'}}>Church Building's History</h1>
                <p style={{paddingTop: '30px', paddingLeft: '55px', paddingRight: '55px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                     Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </Col>
                <Col md={5} className="church-img">
                </Col>
            </Row>
            <div className="container5">
                <h1 style={{fontSize: '70px', marginBottom: '40px'}}>Events</h1>
            <Row className="card-row">
                    <Col className="event-cards" md={4}>
                        <img className="card-img" src={ Church } />
                        <h3>Sunday Service</h3>
                        <p>Lorem ipsum dolor sit amet</p>
                        <button className="card-btn">
                            <a href="">Learn More</a>
                        </button>
                    </Col>
                    <Col className="event-cards" md={4}>
                    <img className="card-img" src={ School } />
                        <h3>Methodist School</h3>
                        <p>Lorem ipsum dolor sit amet</p>
                        <button className="card-btn">
                            <a href="">Learn More</a>
                        </button>
                    </Col>
                    <Col className="event-cards" md={4}>
                    <img className="card-img" src={ BibleStudy2 } />
                        <h3>Methodist School</h3>
                        <p>Lorem ipsum dolor sit amet</p>
                        <button className="card-btn">
                            <a href="">Learn More</a>
                        </button>
                    </Col>
                   
            </Row>

            <AboutUs/>
            </div>
            <ContactUs/>

            <div className="container3">
                <h4>EMAIL NEWSLETTER</h4>
                <h1 style={{fontSize: '60px', marginBottom: '30px'}}>Stay Connected</h1>
                <input className='form-src' type="text" placeholder="Email Address" />
                <button id="btn">
                    <a href="">Subscribe</a>
                </button>

            </div>
            
        </>
    );
}

export default Home;