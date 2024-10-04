import { useContext } from 'react'
import { CartContext } from './../context/CartContext'
import PropTypes from 'prop-types'

function ProductCard({ id, image, name, description, price }) {
    const { addToCart } = useContext( CartContext )
    return (
        <div>
            <div className='product bg-white border border-bor-color rounded-xl'>
                <img
                    className='w-full'
                    src={image}
                    alt={name}
                />
                <div className='p-5'>
                    <div className='text-lg font-semibold mb-3'>
                        {name}
                    </div>
                    <div className='text-sm font-normal mb-3 min-h-10'>
                        {description}
                    </div>
                    <div className='flex justify-between items-center'>
                        <button
                            onClick={() => addToCart(id)}
                            className='bg-primary-600 text-white py-3 px-8 rounded-md'>
                            Add
                        </button>
                        <span className='text-2xl text-primary-600 font-bold'>
                            от {price} ₽
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

ProductCard.propTypes = {
    id: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
}

export default ProductCard
