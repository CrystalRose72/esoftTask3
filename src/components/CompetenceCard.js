import React from 'react';
import Card from "react-bootstrap/Card";
import Col from 'react-bootstrap/Col';

const CompetenceCard = ({competence}) => {
    return (
        <Col>
            <Card>
                <Card.Title>{competence.title}</Card.Title>
                <Card.Text>{competence.description}</Card.Text>
                <Card.Body>{competence.proficiency} </Card.Body>
            </Card>
        </Col>
    );
}

export default CompetenceCard;
