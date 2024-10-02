// Root
import { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import './App.css';
import Layout from './components/layout/index.jsx';
// Routes
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const NotFoundPage = lazy(() =>
   import('./pages/NotFoundPage/NotFoundPage.jsx')
);
function App() {
   return (
      <div>
         <Suspense>
            <BrowserRouter>
               <Routes>
                  <Route element={<Layout />}>
                     <Route index element={<HomePage />}></Route>
                  </Route>
                  <Route path='*' element={<NotFoundPage />} />
               </Routes>
            </BrowserRouter>
         </Suspense>
      </div>
   );
}

export default App;
