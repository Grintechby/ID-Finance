import React from 'react';
import styled from 'styled-components';
import { InputProps } from '../../../types/types';

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

const Input = React.forwardRef(({ type, placeholder, value, onChange }: InputProps, ref:any ) => {
    return (
        <>
            <InputComponent  ref={ref} onChange={onChange} value={value} type={type} placeholder={placeholder} />
        </>
    )
});

export default Input;