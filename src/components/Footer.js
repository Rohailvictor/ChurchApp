import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function footer()  {
    return(
        <>
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

export default footer;