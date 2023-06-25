import React from 'react';
import {Card, Col, Row, Button} from 'react-bootstrap';
import info from '../info.json';

const Projects = () =>
(
    <Card id="Projects" className="AboutMe">
        <Card.Body>
            <Card.Title><h4 className="font-weight-normal">Projects</h4></Card.Title>
            {info.Projects.map(i => 
                <Row key={i.name+i.stakeholder}>
                    <Col xs={12} md={3}>
                    <div>
                        <h6 className="mb-0">{i.name}</h6> 
                        <small>{i.timeFrame}</small>
                    </div>
                    </Col>
                    <Col xs={12} md={8} className="mb-4"> 
                    <div>
                    <h6 className="mb-0">{i.stakeholder}</h6> 
                        {i.description}
                    </div>
                    </Col>
                </Row>
            )}
        </Card.Body>
    </Card>
);

export default Projects;