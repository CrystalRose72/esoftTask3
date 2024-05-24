import React, { useState } from 'react';
import CompetenceList from './CompetenceList';
import {observer} from "mobx-react-lite";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import { competences } from '../competences';

const MyConteiner = observer( () => {
    const [active, setActive] = useState(false);
    const [filterCompetence, setFilteCompetence] = useState(competences)

    const mapCompetence = (filter) => {
        console.log(filter)
        if(filter === "Любой"){
            setFilteCompetence(competences);
        }
        else if(filter === "Больше или равно 50"){
            setFilteCompetence(competences.filter((competences) => competences.proficiency >= 50));
        }
        else{
            setFilteCompetence(competences.filter((competences) => competences.proficiency < 50));
        }
    }

    return (
        <Container>
            <Row style={{display: 'flex', justifyContent: 'center'}}>
                <button onClick={() => setActive(!active)} className='myBatton'>{active ? "Скрыть компетенции" : "Показать компетенции"}</button>
            </Row>
            <div>
                {active ? 
                <div>
                    <Row className='myText'>Уровеннь освоения</Row>
                    <Row style={{display: 'flex', justifyContent: 'center'}}>
                        <Col>
                            <button onClick={() => mapCompetence("Любой")} className='myBatton'>Любой</button>
                        </Col>
                        <Col>
                            <button onClick={() => mapCompetence("Больше или равно 50")} className='myBatton'>&gt;/= 50%</button>
                        </Col>
                        <Col>
                            <button onClick={() => mapCompetence("Меньше 50")} className='myBatton'>&lt;50%</button>
                        </Col>
                    </Row>
                    <Col md={9}>
                    <div>
                        <CompetenceList filterCompetence={filterCompetence}/> 
                    </div>  
                    </Col>
                </div>
                :
                <div></div>    
            }
            </div>  
        </Container>
    );
});

export default MyConteiner;