import React from 'react';
import { IDate } from '../../../types/types';


const DateInput = ({id, max, min, children, placeholder, value, onChange}:IDate) => {
    return (
        <div>
            <input type="number" min={min} max={max} id={id} placeholder={placeholder} value={value} onChange={onChange} />
            <label htmlFor={id}>{children}</label>
        </div>
    )
}

export default DateInput;