import React from 'react';
import { List, Button } from 'antd';

const HistoricNames = ({names, favouriteNames, onAddToFavourite, currentName}) => {

    return (
        <List
            itemLayout="horizontal"
            dataSource={names}
            header={<div>Historic Names</div>}
            renderItem={name => (
                <List.Item
                    actions={[
                    <Button 
                        type="normal" 
                        shape="round" 
                        icon="heart" 
                        onClick={() => onAddToFavourite({forename: name, surname: currentName.surname})}
                        disabled={favouriteNames.indexOf(name) >= 0}
                    />]}
                >
                    <List.Item.Meta
                        title={name}
                        description={currentName.surname}
                    />
                </List.Item>
                    
            )}
        />
    );
}

export {
    HistoricNames
}
