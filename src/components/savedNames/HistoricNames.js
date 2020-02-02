import React from 'react';
import { List, Button } from 'antd';

const HistoricNames = ({ names, favouriteNames, onAddToFavourite }) => {

    return (
        <List
            itemLayout="horizontal"
            dataSource={names}
            header={<label>Historic Names</label>}
            renderItem={name => (
                <List.Item
                    actions={[
                        <Button
                            type="normal"
                            shape="round"
                            icon="heart"
                            onClick={() => onAddToFavourite({ forename: name.forename, surname: name.surname })}
                            disabled={favouriteNames.filter(({ forename, surname }) => forename === name.forename && surname === name.surname).length > 0}
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
