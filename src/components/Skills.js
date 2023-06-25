import React from 'react';
import {ProgressBar, Card, Col, Row} from 'react-bootstrap';
import info from '../info.json';

const Skills = () =>
(
    <Card id="Skills" className="AboutMe">
        <Card.Body>
            <Card.Title><h4 className="font-weight-normal">Some Key Skills</h4></Card.Title>
            <Row>
            <Col xs={12} md={11}>I am proficient in Object Oriented Programming and Web Development.
                The skills shown below are languages, frameworks and tools I have come across and worked intensively with.
                My languages of choice are Java, C# and JavaScript - along with any JS related framework. That being said, learning is key in tech and I have a blast being a student just as much as I do being a mentor!
                My familarity and efficiency in a language is always at its best when I am currently working with it. 
                The following skills are those that I find best represent my time as an engineer.
            </Col>
            </Row>
            <br/>
            <div>
            {info.Skills.map(i => 
                <div>
                    <Row>
                    <Col xs={12} md={6}>
                    <h5 className="font-weight-normal">{i.type}:</h5>
                    </Col>
                    </Row>
                    <Row>
                    <Col xs={12} md={12}>
                    {
                        i.skills.map(skill => <span>&nbsp;{skill.name} | </span>)
                    }
                    </Col>
                    </Row>
                    <br/>
                </div>
            )}
            </div>
        </Card.Body>
    </Card>
);

export default Skills;