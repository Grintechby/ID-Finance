import React from 'react';
import { Route, Routes} from 'react-router-dom';
import './App.css';
import PersonalInfo from './components/PersonalInfo/PersonalInfo';
import SignUpInfo from './components/SignUpInfo/SignUpInfo';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<SignUpInfo />} />
        <Route path='personal_info' element={<PersonalInfo />} />
      </Routes>
    </>
  );
};

export default App;
