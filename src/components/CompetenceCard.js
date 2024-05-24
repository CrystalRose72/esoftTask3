import React from 'react';
import Card from "react-bootstrap/Card";
import Col from 'react-bootstrap/Col';
import '../App.css';

const CompetenceCard = ({competence}) => {
    return (
        <Col md={3}>
            <Card mt={3} style={{width: 240, height: 'auto', cursor: 'pointer'}} className=' myCardCompetence p-1'>
                <Card.Title>{competence.title}</Card.Title>
                <Card.Text>{competence.description}</Card.Text>
                <Card.Body>{competence.proficiency} </Card.Body>
            </Card>
        </Col>
    );
}

export default CompetenceCard;
