import React from 'react';
import {Card, Col, Row} from 'react-bootstrap';
import info from '../info.json';


const Education = () =>
 (
    <Card id="Education" className="AboutMe">
        <Card.Body>
            <Card.Title><h4 className="font-weight-normal">Education</h4></Card.Title>
            {info.Education.map(i => 
                <Row key={i.school+i.degree}>
                    <Col xs={12} md={3}>
                    <div>
                        <h6 className="mb-0">{i.school}</h6> 
                        <small>{i.degree}</small>
                    </div>
                    </Col>
                    <Col xs={12} md={8} className="mb-4"> 
                        {i.body}
                    </Col>
                </Row>
            )}
        </Card.Body>
    </Card>
);

export default Education;