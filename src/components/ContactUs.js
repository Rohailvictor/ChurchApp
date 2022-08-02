import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ContactUs() {
    return (
        <>
             <div className="container6">
                <h1 style={{fontSize: '60px', marginBottom: '30px'}}>Contact US</h1>
                <Row className="form-row">
                    <Col md={5}><input className='form-src' type="text" placeholder="First Name" /></Col>
                    <Col md={5}><input className='form-src' type="text" placeholder="Last Name" /></Col>
                </Row>
                <Row className="form-row">
                    <Col md={5}><input className='form-src' type="text" placeholder="Email Address" /></Col>
                    <Col md={5}><input className='form-src' type="number" placeholder="Phone Number" /></Col>
                    
                </Row>
                <Row>
                    <Col md={10} className="form-text">
                    <p style={{marginTop: '20px', marginBottom: 'none'}}>What can we help you?</p>
                    <textarea id="text-area" type="text"  />
                    </Col>
                
                </Row>
                <Row>
                    <Col md={10}>
                    <button className="submit-btn" id="btn">
                    <a href="">Submit</a>
                    </button>
                     </Col>
                </Row>
               
            </div>

        </>
    )
}

export default ContactUs;