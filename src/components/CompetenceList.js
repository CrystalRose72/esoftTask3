import React from 'react';
import Row from 'react-bootstrap/Row';
import Card from "react-bootstrap/Card";
import CompetenceCard from './CompetenceCard';
import { competences } from '../competences';

const CompetenceList = () => {

    return (
        <Card>
            <Row>
                {competences.map(competence =>
                    <CompetenceCard key={competence.id} competence={competence}/>
                )}
            </Row>
        </Card>
    );
}

export default CompetenceList;