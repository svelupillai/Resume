import React from 'react';
import '../App.css';
import {Image, Card, Col, Row} from 'react-bootstrap';
import logo from '../senaga.png';

function AboutMe() {
  return (
    <Card  className="AboutMe rounded-0" id="AboutMe">
    <Card.Body>
        <Row>
        <Col xs={12} md={4} className="text-center">
            <Image src={logo} className="myPic" roundedCircle/>
        </Col>
        <Col xs={12} md={7}>
            <Card.Title className="row m-auto">
                <h4 className="font-weight-normal">About Me</h4>
                <a target="_blank"  rel="noopener noreferrer" href="https://ca.linkedin.com/in/senagavelupillai"><i className="fab fa-linkedin-in ml-4 mt-1"></i></a>
                <a target="_blank"  rel="noopener noreferrer" href="https://github.com/svelupillai"><i className="fab fa-github ml-2 mt-1"></i></a>
                <a target="_blank"  rel="noopener noreferrer" href="mailto:senagav@gmail.com?Subject=Hi"><i className="fa fa-envelope ml-2 mt-1"></i></a>
            </Card.Title>
            <Card.Text>
            <p>
                I graduated from Concordia with a bachelors of software engineering with honours.
                I have a strong passion for full stack web development and have been since the start of my software adventure.
                There is something so satisfying about full stack development - the feeling after seeing my logic thrive on a user interface is something I never get tired of.
                I have experience going through the entire life cycle of shipping features - from gathering requirements, to creating tech designs, to developing, to testing, and finally releasing.
                Currently, I am working as a senior software developer at AppDirect, focusing on engineering complex features by creating clean, precise architectural documents, and taking on the development process while mentoring juniors to reach their full potential!
            </p>
            <p>
                Problem solving is the main reason as to why I even went into computer science! 
                Thus, I love to solve large problems with easy, maintainable, and resuable solutions.
                I am highly motivated and am constantly looking to sharpen my existing skills and learn new ones.
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
}

export default AboutMe;
