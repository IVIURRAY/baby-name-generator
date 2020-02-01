import React, { useState } from 'react';
import { List, Button } from 'antd';

import './AlphabetButtons.css';

const ALPHABET = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
     'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

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
                grid={{column: 12 }}
            >
            {ALPHABET.map((letter, i) => 
            <List.Item
                key={letter}
            >
                <Button 
                    type={selected === letter ? 'primary' : 'normal'}
                    size="small"
                    onClick={() => handleOnClick(letter)}
                >
                    {letter}
                </Button>
            </List.Item>
            )}
            </List>
        </div>
    ) 
}

export default AlphabetButtons;
