import React from 'react';
import { IMainTemplate } from '../../types/types';
import BreadCrumbs from './BreadCrumbs/BreadCrumbs';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import './MainTemplate.scss';


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