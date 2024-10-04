import React from 'react'
import PropTypes from 'prop-types'

function CartCard({id, image, name, description, price, quantity}) {
    return (
        <div>
            <div className='flex bg-white items-center p-5 mb-6 rounded-xl'>
                <img
                    className='w-28'
                    src={image || ''}
                    alt={name || 'Product image'}
                />
                <div className='flex-1 ml-8'>
                    <div className='text-2xl font-bold'>
                        {name || 'Product name'}
                    </div>
                    <div>{description || 'Product description'}</div>
                </div>

                <div>
                    <button className='p-2 bg-primary-600 m-2 text-white rounded-lg'>
                        -
                    </button>

                    {quantity}

                    <button className='p-2 bg-primary-600 m-2 text-white rounded-lg'>
                        +
                    </button>
                </div>

                <span className='ml-8 text-2xl text-primary-600 font-bold'>
                    {price} ₽
                </span>
            </div>  
        </div>
    )
}

CartCard.propTypes = {
    id: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
}

export default CartCard
