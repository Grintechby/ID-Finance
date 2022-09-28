import React from 'react';
import './InformWindow.scss';
import { useAppSelector } from '../../hooks/redux';
import cn from 'classnames';

interface InformWindowProps {
    visible: boolean;
}

const InformWindow = ({visible}: InformWindowProps) => {
    const { personInfo: { birthday, firstName, lastName, ocean, sex }, signUp: { email, mobilePhone } } = useAppSelector(state => state)
    return (
        <div className={cn('popup__container', !visible && 'hidden')}>
            <h3>Profile information</h3>
            <div className='fullname_box'>
                <h4>Full name:</h4>
                <span>{firstName} {lastName}</span>
            </div>
            <div className='age_box'>
                <h4>Age</h4>
                <span>Current age: {birthday} years</span>
            </div>

            <div className='gender_box'>
                <h4>Gender</h4>
                <span>{sex}</span>
            </div>

            <div className='email_box'>
                <h4>Email</h4>
                <p>{email}</p>
            </div>

            <div className='phone_box'>
                <h4>Mobile phone</h4>
                <p>{mobilePhone}</p>
            </div>

            <div className='ocean_box'>
                <h4>Your favorite ocean</h4>
                <p>{ocean} ocean</p>
            </div>
        </div>
    )
}

export default InformWindow