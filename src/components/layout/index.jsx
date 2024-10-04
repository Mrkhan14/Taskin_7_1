import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
   return (
      <Fragment>
         <Header />
         <div className='md:container md:mx-auto'>
            <Outlet />
         </div>
      </Fragment>
   );
};

export default Layout;
