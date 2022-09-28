import React from 'react';


interface ICheckbox {
    id: string;
    value: string;
    children: React.ReactNode;
    onChange?: (e:any) => void;
    checked?: boolean;
}

const Checkbox = ({id, value, children, checked, onChange}:ICheckbox) => {
    return (
        <div>
            <input id={id} type="checkbox" value={value} onChange={onChange} checked={checked} />
            <label htmlFor={id}>{children}</label>
        </div>
    )
}

export default Checkbox;