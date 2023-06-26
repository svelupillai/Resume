import React from 'react';
import '../App.css';
import {Image, Card, Col, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import logo from '../images/hiking.jpg';

const AboutMe= () =>
(   
    <Card className="AboutMe" id="AboutMe">
    <Card.Body>
        <Row>
        <Col xs={12} md={4} className="text-center">
            <Image src={logo} className="myPic" roundedCircle/>
        </Col>
        <Col xs={12} md={7}>
            <Card.Title className="row m-auto">
                <h4 className="font-weight-normal">A little about me</h4>
                <a target="_blank"  rel="noopener noreferrer" href="https://ca.linkedin.com/in/senagavelupillai"><i className="fab fa-linkedin-in ml-4 mt-1"></i></a>
                <Link target="_blank" to='/files/SenagaVelupillaiResume.pdf' download><i class="fa fa-file  ml-2 mt-1"></i></Link>
                <a target="_blank"  rel="noopener noreferrer" href="https://github.com/svelupillai"><i className="fab fa-github ml-2 mt-1"></i></a>
                <a target="_blank"  rel="noopener noreferrer" href="mailto:senagav@gmail.com?Subject=Hi"><i className="fa fa-envelope ml-2 mt-1"></i></a>
            </Card.Title>
            <Card.Text>
            <p>
                I graduated from Concordia with a bachelors of software engineering with honours.
                I have a strong passion for full stack development - the feeling after seeing my backend logic thrive on a user interface is something I never get tired of.
                I have experience going through the entire life cycle of shipping features - from gathering requirements, to creating tech designs, to developing, testing, finally releasing.
            </p>
            <p>
                Problem solving is the main reason as to why I even went into computer science! 
                Thus, I love to solve large problems with easy, maintainable, and resuable solutions.
                I am highly motivated and am constantly looking to sharpen my existing skills and learn new ones.
                In my free non technical time you can find me baking some sweets, going on hikes, reading a ton or bingeging the latest trending tv series!
            </p>
            <p>
                Feel free to contact me!
            </p>
            </Card.Text>
            </Col>
        </Row>
    </Card.Body>
    </Card>
);

export default AboutMe;
