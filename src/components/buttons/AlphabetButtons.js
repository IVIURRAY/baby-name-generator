import React, { useState } from 'react';
import { List, Button, Collapse, Icon } from 'antd';

import './AlphabetButtons.css';
import CollapsePanel from 'antd/lib/collapse/CollapsePanel';

const ALPHABET = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
     'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

const collapsePanelStyle = {
    background: 'white',
    border: 0,
    padding: '20px'
}

const AlphabetButtons = ({setFirstNameCharFilter}) => {

    const [selected, setSelected] = useState(null);

    const handleOnClick = char => {
        if (char === selected) {
            char = null;
        }
        setFirstNameCharFilter(char)
        setSelected(char)
    }

    return (
            <div className="alphabetContainer">
                <List
                    grid={{column: 6 }}
                >
                {ALPHABET.map((letter, i) => 
                <List.Item
                    key={letter}
                >   
                <div className="alphabetButton">
                    <Button 
                        type={selected === letter ? 'primary' : 'normal'}
                        size="large"
                        onClick={() => handleOnClick(letter)}
                    >
                        {letter}
                    </Button>
                </div>
                    
                </List.Item>
                )}
                </List>
            </div>
    ) 
}

export default AlphabetButtons;
