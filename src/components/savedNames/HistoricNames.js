import React from 'react';
import { List, Button } from 'antd';

const HistoricNames = ({names, onAddToFavourite}) => {
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
                        onClick={() => onAddToFavourite(name)}
                    />]}
                >
                    <List.Item.Meta
                        title={name}
                    />
                </List.Item>
                    
            )}
        />
    );
}

export {
    HistoricNames
}
