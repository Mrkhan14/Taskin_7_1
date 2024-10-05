import { useContext } from 'react';
import { CartContext } from './../context/CartContext';
import PropTypes from 'prop-types';
import IncDec from './IncDec';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function ProductCard({ id, image, name, description, price }) {
    const { addToCart, cart, favorites, addFavorite, removeFavorite } = useContext(CartContext);
    const productInCart = cart.find(product => product.id === id);
    const isFavorite = favorites.includes(id);

    return (
        <>
            <div className='product bg-white border border-bor-color rounded-xl relative'>
                {isFavorite ? (
                    <div onClick={() => removeFavorite(id)} className=' absolute top-2 right-4 z-40'>
                        <img src="./../../public/RemoveFavoriteIcon.svg" alt="" />
                    </div>
                ) : (
                    <div onClick={() => addFavorite(id)}  className=' absolute top-2 right-4 z-40'>
                        <img src="./../../public/AddFavoriteIcon.svg" alt="" />
                    </div>
                )}
                <LazyLoadImage
                    effect="blur"
                    wrapperClassName='w-full block'
                    className='w-full block'
                    src={image}
                    alt={name}
                    width={image.width} 
                />
                <div className='p-5'>
                    <div className='text-lg font-semibold mb-3'>
                        {name}
                    </div>
                    <div className='text-sm font-normal mb-3 min-h-10'>
                        {description}
                    </div>
                    <div className='flex justify-between items-center'>
                        {productInCart ? (
                            <IncDec quantity={productInCart.quantity} id={id} />
                        ) : (
                            <button
                                onClick={() => addToCart(id)}
                                className='bg-primary-600 text-white py-3 px-8 rounded-md'>
                                Add
                            </button>
                        )}
                        <span className='text-2xl text-primary-600 font-bold'>
                            от {price} ₽
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

ProductCard.propTypes = {
    id: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
    quantity: PropTypes.number,
    IncDec:PropTypes.string,
};

export default ProductCard;