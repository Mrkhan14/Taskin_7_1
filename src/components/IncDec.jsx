import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { CartContext } from '../context/CartContext'

const IncDec = ({ quantity, id }) => {
    const {increaseQuantity, decreaseQuantity} = useContext(CartContext)
    return (
        <div>
            <button
                onClick={() => decreaseQuantity(id)}
                className='p-2 bg-primary-600 m-2 text-white rounded-lg'>
                -
            </button>

            {quantity}

            <button
                onClick={() => increaseQuantity(id)}
                className='p-2 bg-primary-600 m-2 text-white rounded-lg'>
                +
            </button>
        </div>
    )
}
IncDec.propTypes = {
    id: PropTypes.number,
    quantity: PropTypes.string,
}
export default IncDec