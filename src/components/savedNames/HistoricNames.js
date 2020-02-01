import React from 'react';
import { List, Button } from 'antd';

const HistoricNames = ({names, favouriteNames, onAddToFavourite}) => {

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
                        onClick={() => onAddToFavourite({forename: name.forename, surname: name.surname})}
                        disabled={favouriteNames.indexOf(name) >= 0}
                    />]}
                >
                    <List.Item.Meta
                        title={name.forename}
                        description={name.surname}
                    />
                </List.Item>
                    
            )}
        />
    );
}

export {
    HistoricNames
}
