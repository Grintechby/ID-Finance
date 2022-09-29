import React from 'react';
import { IRadio } from '../../../types/types';


const RadioButton = ({onChange, value, id, name, children}:IRadio) => {
    return (
        <div>
            <input type="radio" name={name} id={id} value={value} onChange={onChange} />
            <label htmlFor={id}>{children}</label>
        </div>
    )
};

export default RadioButton;