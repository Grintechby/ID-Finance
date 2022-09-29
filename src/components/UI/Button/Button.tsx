import React from 'react';
import styled from 'styled-components';
import { IButton } from '../../../types/types';


const Button = styled.button`
    background-color: white;
    color: #80858B;
    cursor: pointer;
    font-size: 18px;
    padding: 10px 30px;
    border: 2px solid #80858B;
    border-radius: 6px;
    margin: 0 auto;
    transition: .2s;

    &:hover {
        background-color: #80858B;
        color: white;
    }
`;

const ButtonComponent = ({ onClick, children }: IButton) => {
    return (
        <>
            <Button onClick={onClick} >{children}</Button>
        </>
    )
};

export default ButtonComponent;