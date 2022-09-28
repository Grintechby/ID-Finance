import React, { useState } from 'react';
import './SignUpInfo.scss';
import InputMask from 'react-input-mask';
import Input from '../UI/Input/Input';
import ButtonComponent from '../UI/Button/Button';
import userSchema from '../../schemes/schema.json';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setConfirmPassword, setEmail, setMobilePhone, setPassword, signUpSlice } from '../../store/reducers/signup';
import { useNavigate } from 'react-router-dom';
import MainTemplate from '../MainTemplate/MainTemplate';

const SignUpInfo = () => {

    const navigate = useNavigate();

    const Ajv = require('ajv');
    const ajv = new Ajv();

    const dispatch = useAppDispatch();
    const { mobilePhone, email, password, confirmPassword } = useAppSelector(state => state.signUp);

    const addPhone = (e: any) => {
        dispatch(setMobilePhone(e.target.value.split(' ').join('')))
    };

    const addEmail = (e: any) => {
        dispatch(setEmail(e.target.value))
    };

    const addPassword = (e: any) => {
        dispatch(setPassword(e.target.value))
    };

    const addConfirmPassword = (e: any) => {
        dispatch(setConfirmPassword(e.target.value))
    };

    const handleValidation = () => {
        const valid = ajv.validate(userSchema.properties.signInf, { mobilePhone, email, password, confirmPassword });
        if (valid) {
            navigate('/personal_info', { replace: true })
        }
        console.log(valid);
    }

    return (
        <MainTemplate>
            <div className='signup__container'>
                <h2>Регистрация</h2>
                <InputMask value={mobilePhone} onChange={addPhone} className='sc-bczRLJ drLNjE' mask='+375\ 99 999 99 99' placeholder='Номер телефона' />
                <Input onChange={addEmail} value={email} placeholder='Email' type='email' />
                <Input onChange={addPassword} value={password} placeholder='Пароль' type='password' />
                <Input onChange={addConfirmPassword} value={confirmPassword} placeholder='Подтверждение пароля' type='password' />
                <ButtonComponent onClick={handleValidation}>Next</ButtonComponent>
            </div>
        </MainTemplate>
    )
}

export default SignUpInfo;