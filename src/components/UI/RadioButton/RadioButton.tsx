import './RadioButton.scss';
import React from 'react';

interface IRadio {
    value: string;
    onChange: (e:any) => void;
    name: string;
    id: string;
    children: React.ReactNode;
}

const RadioButton = ({onChange, value, id, name, children}:IRadio) => {
    return (
        <div>
            <input type="radio" name={name} id={id} value={value} onChange={onChange} />
            <label htmlFor={id}>{children}</label>
        </div>
    )
}

export default RadioButton;