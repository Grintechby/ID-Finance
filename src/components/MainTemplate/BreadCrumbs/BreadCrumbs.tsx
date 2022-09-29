import React from 'react';
import { Link } from 'react-router-dom';
import './BreadCrumbs.scss';
import useBreadcrumbs from 'use-react-router-breadcrumbs';


const BreadCrumbs = () => {

  const breadcrumbs = useBreadcrumbs();

  return (
    <div className='breadcrumbs'>
      {breadcrumbs.map(({ breadcrumb, match }, index) => (
        <>
          <Link key={match.pathname} to={match.pathname || ''}>{breadcrumb}</Link>
          {index !== breadcrumbs.length - 1 && <img src='./right-arrow.png' alt='' />}
        </>
      ))}
    </div>
  )
}

export default BreadCrumbs;