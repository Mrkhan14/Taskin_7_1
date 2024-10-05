import { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import AccountIcon from '../../assets/icons/AccountIcon';
import LocationIcon from '../../assets/icons/LocationIcon';
import ShoppingIcon from '../../assets/icons/ShoppingIcon';
import { categories } from '../../data/categories';
import './Header.css';
import { CartContext } from '../../context/CartContext';

const Header = () => {
   const {cart} = useContext(CartContext)
   return (
      <header className='bg-white'>
         <div className='border-b border-bor-color'>
            <div className='md:container md:mx-auto'>
               <div className='flex py-2'>
                  <div className='flex text-sm font-medium mr-10'>
                     <LocationIcon />
                     <span className='ml-1'>Москва</span>
                  </div>
                  <div className=' text-sm font-medium mr-10'>
                     Проверить адрес
                  </div>
                  <div className='flex-1 text-sm font-medium mr-10'>
                     Среднее время доставки*: <b>00:24:19</b>
                  </div>
                  <div className='text-sm font-medium mr-10'>
                     Время работы: с 11:00 до 23:00
                  </div>
                  <div className='flex '>
                     <AccountIcon />
                     <span className='ml-1'>Войти в аккаунт</span>
                  </div>
               </div>
            </div>
         </div>
         <div className='md:container md:mx-auto'>
            <div className='flex items-center py-4'>
               <NavLink to='/' className='logo mr-8'>
                  <img className='./logo.png' src='/logo.png' alt='Logo' />
               </NavLink>
               <ul className='nav flex flex-1'>
                  <li className='mx-7 text-base font-medium'>
                     <span>Акции</span>
                  </li>
                  {categories.map((category, index) => (
                     <li key={index} className='mx-7 text-base font-medium'>
                        <span>{category.name}</span>
                     </li>
                  ))}
               </ul>
               <NavLink
                  className='bg-primary-600 flex h-10 w-40 justify-center rounded-lg items-center'
                  to='/cart'
               >
                  <ShoppingIcon />
                  <span className='text-white'>
                     <span className='mx-1'>({cart.length})</span> шт.
                     <span className='mx-1'>100</span> ₽
                  </span>
               </NavLink>
            </div>
         </div>
      </header>
   );
};

export default Header;
