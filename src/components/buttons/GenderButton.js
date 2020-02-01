import React from 'react';
import { Switch } from 'antd';

const GenderButton = ({setGenderFilter}) => {

    return (
        <div className="genderBtn">
            <Switch 
                defaultChecked
                checkedChildren='Boy'
                unCheckedChildren='Girl'
                onChange={(checked, e) => setGenderFilter(checked ? 'BOY' : 'GIRL')}
            />
        </div>
    )

}

export {
    GenderButton
}