import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';


const Footer = () => {
    return (
        <Fragment>
            <div className="bg-white mt-16 py-8">
                <div className='md:container md:mx-auto'>
                    <div className=' grid grid-cols-4 gap-4 max-sm:grid-cols-2 max-md:grid-cols-2 max-lg:grid-cols-3'>
                        
                        <div className='flex justify-between flex-col'>
                            <NavLink to='/' className='logo mr-8'>
                                <img className='./logo.png' src='/logo.png' alt='Logo' />
                            </NavLink>
                            <div className='my-3 text-sm font-medium'>
                                © Copyright 2021 — Куда Пицца
                            </div>
                        </div>

                        <div>
                            <h1 className='text-xl font-semibold'>Куда пицца</h1>
                            <ul>
                                <li className='my-3 text-sm font-medium'>О компании</li>
                                <li  className='my-3 text-sm font-medium'>Пользовательское соглашение</li>
                                <li  className='my-3 text-sm font-medium'>Условия гарантии</li>
                            </ul>
                        </div>

                        <div>
                            <h1 className='text-xl font-semibold'>Помощь</h1>
                            <ul>
                                <li className='my-3 text-sm font-medium'>Ресторан</li>
                                <li  className='my-3 text-sm font-medium'>Контакты</li>
                                <li  className='my-3 text-sm font-medium'>Поддержка</li>
                                <li  className='my-3 text-sm font-medium'>Отследить заказ</li>
                            </ul>
                        </div>

                        <div>
                            <h1 className='text-xl font-semibold'>Контакты</h1>
                            <ul>
                                <li className='my-3 text-sm font-medium'>+7 (926) 223-10-11</li>
                                <li  className='my-3 text-sm font-medium'>Москва, ул. Юных Ленинцев, д.99</li>
                                <li  className='my-3 text-sm font-medium'>Facebok</li>
                            </ul>
                        </div>
                    </div>

                    
                </div>
            </div>
        </Fragment>
    );
};

export default Footer;