import React from 'react';
import { ICheckbox } from '../../../types/types';


const Checkbox = ({id, value, children, checked, onChange}:ICheckbox) => {
    return (
        <div>
            <input id={id} type="checkbox" value={value} onChange={onChange} checked={checked} />
            <label htmlFor={id}>{children}</label>
        </div>
    )
}

export default Checkbox;