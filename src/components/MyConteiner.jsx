import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import CompetenceList from './CompetenceList';
import {observer} from "mobx-react-lite";

const MyConteiner = observer( () => {
    const [active, setActive] = useState(false);

    return (
        <div>
            <button onClick={() => setActive(!active)}>{active ? "Скрыть компетенции" : "Показать компетенции"}</button>
            {active ? 
            <div>
                <CompetenceList/> 
            </div> 
            :
            <div></div>    
        }
        </div>
    );
});

export default MyConteiner;