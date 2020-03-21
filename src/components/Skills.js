import React from 'react';
import {ProgressBar, Card, Col, Row} from 'react-bootstrap';
import info from '../info.json';

function Skills(){
    return (
        <Card id="Skills" className="AboutMe rounded-0">
        <Card.Body>
            <Card.Title><h4 className="font-weight-normal">Skills</h4></Card.Title>
            <Row>

            <Col xs={12} md={11}>I have good knowledge in Object Oriented and Web Development.
                The skills shown below are languages, frameworks and tools I have come across.
                My languages of choice are JavaScript - along with any JS related framework, C#, and Java.
                My familarity and efficiency in a language is always at its best when I am currently working with it. 
                Thus it is hard to accurately present/measure each skill but the following is what I deem a fair representation!
            </Col>
            </Row>
            <br/>
            <Row>
            {info.Skills.map(i => 
                <Col xs={12} md={6}>
                    <h5 className="font-weight-normal">{i.type}:</h5>
                    {
                        i.skills.map(skill => 
                            <div>
                                <span>{skill.name}</span>
                                <ProgressBar now={skill.percent} />                          
                            </div>
                        )
                    }
                    <br/>
                </Col>
            )}
            </Row>
        </Card.Body>
    </Card>
    );
}

export default Skills;