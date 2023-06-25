import React from 'react';
import '../App.css';
import back from '../code.jpg'
import {Image, Card, Col, Row} from 'react-bootstrap';
import logo from '../images/senaga.png';

const Home = () =>
(
    <Card className='JobDescription Home fade-in-left' id="Home">
         <Card.Body>
         <Row>
        <Col xs={12} md={4}>
        <Image src={logo} className="myPic"/>
        </Col>
        <Col xs={12} md={7}>
            <Card.Text>
                <div className="fade-in-para">
                    <h2>Hey, it's Senaga Velupillai</h2>
                    <div>
                    A Senior Software Engineer with over 5 years of experience in the tech world! 
                    <br/>
                    Currently working at AppDirect and filling her days engineering solutions,
                    <br/> 
                    bringing those solutions to life and releasing them as critical features.
                    <br/>
                    </div>
                </div>
                <div className='arrow fade-in-down'>&#x2193;</div>
            </Card.Text>
            </Col>
        </Row>
    </Card.Body>
    </Card>
);

export default Home;