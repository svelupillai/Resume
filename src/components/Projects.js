import React from 'react';
import {Card, Col, Row, Button} from 'react-bootstrap';
import info from '../info.json';

function Projects(){

    return (
        <Card id="Projects" className="AboutMe rounded-0">
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
             <div className='text-center'> 
                <h4 className="m-0 pb-1"><i className="fab fa-github"></i></h4>
                <div className="pb-1">
                    Head over to my github to see more <i className="fas fa-arrow-right pr-2 pl-2"></i> 
                    <Button href="https://github.com/svelupillai" target="_blank"  rel="noopener noreferrer"> Visit now</Button>
                </div>
             </div>
        </Card.Body>
    </Card>
    );
}

export default Projects;