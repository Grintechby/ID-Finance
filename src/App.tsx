import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import InformWindow from './components/InformWindow/InformWindow';
import MainTemplate from './components/MainTemplate/MainTemplate';
import PersonalInfo from './components/PersonalInfo/PersonalInfo';
import SignUpInfo from './components/SignUpInfo/SignUpInfo';
import Input from './components/UI/Input/Input';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<SignUpInfo />} />
        <Route path='personal_info' element={<PersonalInfo />} />
      </Routes>
    </>
  );
}

export default App;
