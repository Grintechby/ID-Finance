import React from 'react';

interface IDate {
    min: string;
    max: string;
    id: string;
    placeholder: string;
    children: React.ReactNode;
    onChange?: (e:any) => void;
    value?: string;
}

const DateInput = ({id, max, min, children, placeholder, value, onChange}:IDate) => {
    return (
        <div>
            <input type="number" min={min} max={max} id={id} placeholder={placeholder} value={value} onChange={onChange} />
            <label htmlFor={id}>{children}</label>
        </div>
    )
}

export default DateInput;