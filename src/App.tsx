import React from 'react';
import { Link, NavLink, Outlet, Route, RouteObject, Routes, useRoutes } from 'react-router-dom';
import './App.css';
import PersonalInfo from './components/PersonalInfo/PersonalInfo';
import SignUpInfo from './components/SignUpInfo/SignUpInfo';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import BreadCrumbs from './components/MainTemplate/BreadCrumbs/BreadCrumbs';


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
