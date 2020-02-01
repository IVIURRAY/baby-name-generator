import React from 'react';
import { List, Button } from 'antd';

const FavouriteNames = ({names, onRemoveFromFavouite}) => {

    return (
        <List
            itemLayout="horizontal"
            dataSource={names}
            header={<div>Favourite Names</div>}
            renderItem={name => (
                <List.Item
                    actions={[
                    <Button 
                        type="normal" 
                        shape="round" 
                        icon="heart" 
                        onClick={() => onRemoveFromFavouite(name)}
                    />]}
                >
                    <List.Item.Meta
                        title={name}
                    />
                </List.Item>
                    
            )}
        />
    )
}

export default FavouriteNames;
