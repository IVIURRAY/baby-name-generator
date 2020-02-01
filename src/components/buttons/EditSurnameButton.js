import React, { useState } from 'react';
import { Button, Modal, Input } from 'antd';

const EditSurnameButton = ({currentName, setCurrentSurname}) => {

    const [isVisible, setIsVisible] = useState(false);
    const [inputSurname, setInputSurname] = useState(currentName.surname);

    const handleOnOk = () => {
        setCurrentSurname(inputSurname)
        setIsVisible(false)
    }

    return (
        <div className="editSurnameBtn">
            <Button icon="edit" size="large" onClick={() => setIsVisible(true)}>
                Edit Surname
            </Button>
            <Modal
                title="Basic"
                visible={isVisible}
                onOk={handleOnOk}
                onCancel={() => setIsVisible(false)}
            >
                <Input 
                    placeholder={currentName.surname} 
                    onChange={e => setInputSurname(e.target.value)}
                />
            </Modal>
        </div>
    )
}

export {
    EditSurnameButton
};
