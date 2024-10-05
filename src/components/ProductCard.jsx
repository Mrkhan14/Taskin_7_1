import { useContext } from 'react'
import { CartContext } from './../context/CartContext'
import PropTypes from 'prop-types'
import IncDec from './IncDec'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function ProductCard({ id, image, name, description, price }) {
    const { addToCart, cart  } = useContext(CartContext)
    const productInCart = cart.find(product => product.id === id)
    return (
        <div>
            <div className='product bg-white border border-bor-color rounded-xl'>
                <LazyLoadImage
                    effect="blur"
                    // wrapperProps={{
                    //     // If you need to, you can tweak the effect transition using the wrapper style.
                    //     style: {transitionDelay: "1s"},
                    // }}
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
                        {productInCart ? <IncDec quantity={productInCart.quantity} id={id}></IncDec> : <button
                            onClick={() => addToCart(id)}
                            className='bg-primary-600 text-white py-3 px-8 rounded-md'>
                            Add
                        </button> }
                        
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
