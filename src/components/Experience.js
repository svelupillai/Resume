import React from 'react';
import {Card, Col, Row} from 'react-bootstrap';
import info from '../info.json';

function Experience(){

    return (
        <Card id="Experience" className="AboutMe rounded-0">
        <Card.Body>
            <Card.Title><h4 className="font-weight-normal">Experience</h4></Card.Title>
            {info.Experience.map(i => 
                <Row key={i.company+i.time}>
                    <Col xs={12} md={3}>
                    <div>
                        <h6 className="mb-0">{i.company}</h6> 
                        <small>{i.time}</small>
                    </div>
                    </Col>
                    <Col xs={12} md={8} className="mb-4"> 
                    <div>
                    <h6 className="mb-0">{i.position}</h6> 
                        {i.body}
                    </div>
                    </Col>
                </Row>
            )}
        </Card.Body>
    </Card>
    );
}

export default Experience;