import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Card from "react-bootstrap/Card";
import CompetenceCard from './CompetenceCard';
import { competences } from '../competences';
import '../App.css';
import {observer} from "mobx-react-lite";

const CompetenceList = observer(({filterCompetence}) => {

    return (
        <Card className='mx-auto mr-3'>
            <Row className="d-flex myList">
                {filterCompetence.map(competence =>
                    <CompetenceCard key={competence.id} competence={competence}/>
                )}
            </Row>
        </Card>
    );
})

export default CompetenceList;