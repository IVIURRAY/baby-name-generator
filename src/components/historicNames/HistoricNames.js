import React from 'react';

const HistoricNames = ({historicNames}) => {
    return (
        <ul>
            {historicNames.map((name, i) => <li key={i}>{name}</li>)}   
        </ul>
    );
}

export {
    HistoricNames
}