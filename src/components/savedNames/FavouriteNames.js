import React from 'react';
import { List, Button } from 'antd';

const FavouriteNames = ({names, onRemoveFromFavouite}) => {

    return (
        <List
            itemLayout="horizontal"
            dataSource={names}
            header={<div>Favourite Names</div>}
            renderItem={({forename, surname}) => (
                <List.Item
                    actions={[
                    <Button 
                        type="normal" 
                        shape="round" 
                        icon="close" 
                        onClick={() => onRemoveFromFavouite({forename, surname})}
                    />]}
                >
                    <List.Item.Meta
                        title={forename}
                        description={surname}
                    />
                </List.Item>
                    
            )}
        />
    )
}

export default FavouriteNames;
