import React from 'react';
import styled from 'styled-components';

const InputComponent = styled.input`
    border: 2px solid #80858B;
    border-radius: 6px;
    background-color: #fff;
    font-size: 16px;
    line-height: 28px;
    height: 45px;
    padding-left: 10px;
    width: 100%; 
    &:focus {
    outline: none;
}
`;

interface InputProps {
    type: string;
    placeholder: string;
    value?: string;
    onChange?: (e:any) => void;
}

const Input = ({ type, placeholder, value, onChange }: InputProps) => {
    return (
        <>
            <InputComponent onChange={onChange} value={value} type={type} placeholder={placeholder} />
        </>
    )
}

export default Input;