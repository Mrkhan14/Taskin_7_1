import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
   return (
      <Fragment>
         <Header />
         <div className='md:container md:mx-auto'>
            <Outlet />
         </div>
         <Footer></Footer>
      </Fragment>
   );
};

export default Layout;
