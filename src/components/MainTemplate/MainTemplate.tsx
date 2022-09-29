import React from 'react';
import BreadCrumbs from './BreadCrumbs/BreadCrumbs';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import './MainTemplate.scss';

interface IMainTemplate {
    children: React.ReactNode;
}

const MainTemplate = ({ children }: IMainTemplate) => {
    return (
        <div className='template'>
            <Header />
            <BreadCrumbs />
            <div className='template__content'>{children}</div>
            <Footer />
        </div>

    )
}

export default MainTemplate