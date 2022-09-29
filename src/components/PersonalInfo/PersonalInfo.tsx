import './PersonalInfo.scss';
import React, { useState } from 'react';
import MainTemplate from '../MainTemplate/MainTemplate';
import Input from '../UI/Input/Input';
import ButtonComponent from '../UI/Button/Button';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setBirthday, setDay, setFirstName, setHobbies, setLastName, setMonth, setOcean, setSex } from '../../store/reducers/personInfoSlice';
import userSchema from '../../schemes/schema.json';
import RadioButton from '../UI/RadioButton/RadioButton';
import DateInput from '../UI/DateInput/DateInput';
import Checkbox from '../UI/Checkbox/Checkbox';
import InformWindow from '../InformWindow/InformWindow';
import cn from 'classnames';
import { useNavigate } from 'react-router-dom';


const PersonalInfo = () => {

    const navigate = useNavigate();

    const Ajv = require('ajv');
    const ajv = new Ajv();

    const dispatch = useAppDispatch();
    const { firstName, lastName, sex, birthday, ocean, year, day, month, hobby, } = useAppSelector(state => state.personInfo);
    const [visible, setVisible] = useState(false);

    const addFirstName = (e: any) => {
        dispatch(setFirstName(e.target.value))
    };

    const addLastName = (e: any) => {
        dispatch(setLastName(e.target.value))
    };

    const addSex = (e: any) => {
        dispatch(setSex(e.target.value))
    };

    const addOcean = (e: any) => {
        dispatch(setOcean(e.target.value))
    };

    const addBirth = (e: any) => {
        dispatch(setBirthday(e.target.value));
    };
    const addMonth = (e: any) => {
        dispatch(setMonth(e.target.value));
    };
    const addDay = (e: any) => {
        dispatch(setDay(e.target.value));
    };

    const addHobby = (e:any) => {
        dispatch(setHobbies({
            id: e.target.id,
            value:e.target.value,
            checked:e.target.checked
        }));
    };

    const handleValidation = () => {
        const valid = ajv.validate(userSchema.properties.personInf, { firstName, lastName, sex, birthday, ocean, hobby });
        if (valid) {
            setVisible(!visible)
        }
        console.log(valid);
    };

    return (
        <MainTemplate>
            <div className='personal__container'>

                <h2>Personal info</h2>
                <Input onChange={addFirstName} value={firstName} placeholder='First name' type='text' />
                <Input onChange={addLastName} value={lastName} placeholder='Last name' type='text' />

                <div className='personal__container_sex'>
                    <h3>Sex:</h3>
                    <RadioButton id='male' name='sex' onChange={addSex} value='Male'>Male</RadioButton>
                    <RadioButton id='female' name='sex' onChange={addSex} value='Female'>Female</RadioButton>
                </div>

                <div className='personal__container_birthday'>
                    <h3>Date of birth:</h3>
                    <DateInput id='day' min='1' max='31' placeholder='DD' value={day} onChange={addDay}>Day</DateInput>
                    <DateInput id='month' min='1' max='12' placeholder='MM' value={month} onChange={addMonth}>Month</DateInput>
                    <DateInput id='year' min='1900' max={new Date().getFullYear().toString()} placeholder='YYYY' value={year} onChange={addBirth}>Year</DateInput>
                </div>

                <div className='personal__container_ocean'>
                    <h3>Your Favorite Ocean:</h3>
                    <select name="" id="" onChange={addOcean} value={ocean} >
                        <option value="Atlantic">Atlantic</option>
                        <option value="Pacific">Pacific</option>
                        <option value="Indian">Indian</option>
                        <option value="Arctic">Arctic</option>
                    </select>
                </div>

                <div className='personal__container_hobby'>
                    <h3>Hobby:</h3>
                    <Checkbox onChange={addHobby} id='sport' value='Sport'>Sport</Checkbox>
                    <Checkbox onChange={addHobby} id='beauty' value='Beauty'>Beauty</Checkbox>
                    <Checkbox onChange={addHobby} id='it' value='IT'>IT</Checkbox>
                    <Checkbox onChange={addHobby} id='pets' value='Pets'>Pets</Checkbox>
                </div>
                <div className="buttons_box">
                    <ButtonComponent onClick={() => navigate('/', { replace: true })}>Change SignUp</ButtonComponent>
                    <ButtonComponent onClick={handleValidation}>Complete</ButtonComponent>
                </div>
            </div>
            <div className={cn('overlay', !visible && 'hidden')} onClick={() => setVisible(!visible)}>
                <InformWindow visible={visible} />
            </div>

        </MainTemplate>
    )
};

export default PersonalInfo;
