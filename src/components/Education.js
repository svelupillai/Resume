import React from 'react';
import {Image, Card, Col, Row} from 'react-bootstrap';
import info from '../info.json';


function Education(){
    return (
        <div id="Education">
            <Card>
                <Card.Body>
                    <Card.Title>Education</Card.Title>
                    {info.Education.map(i => 
                        <Row key={i.school+i.degree}>
                            <Col>{i.school}</Col>
                            <Col>{i.degree}
                                {i.body}
                            </Col>
                        
                        </Row>
                    )}
                </Card.Body>

            </Card>
        </div>
    );
}

export default Education;