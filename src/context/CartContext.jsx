import { createContext, useState } from 'react'
import PropTypes from 'prop-types';
import { products } from '../data/product';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')))

    const addToCart = ( id ) => {
        const productFound = products.find( product => product.id === id ) // find in products
        const productInCart = cart.find( product => product.id === id ) // find in cart
        let newCart;
    if ( productInCart ) {
        newCart = cart.map( product => product.id === id ? { ...product, quantity: product.quantity + 1 } : product )
        setCart( newCart )
    } else {
        newCart = [ ...cart, { ...productFound, quantity: 1 } ]
        setCart( newCart )
    }
    localStorage.setItem('cart', JSON.stringify(newCart) )
}
    console.log(cart);


    const increaseQuantity = (id) => {
        let newCart;
        newCart = cart.map( product => product.id === id ? { ...product, quantity: product.quantity + 1 } : product )
        setCart(newCart)
        localStorage.setItem('cart', JSON.stringify(newCart) )
    }

    const decreaseQuantity = (id) => {
        const productInCart = cart.find(product => product.id === id) // find in cart
        let newCart;
        if (productInCart.quantity === 1) {
            newCart= cart.filter(product => product.id !== id)
            setCart(newCart)
        } else {
            newCart = cart.map( product => product.id === id ? { ...product, quantity: product.quantity - 1 } : product )
            setCart(newCart)
        }
        localStorage.setItem('cart', JSON.stringify(newCart) )
    }


    const state = {cart, addToCart, increaseQuantity, decreaseQuantity }

    return (
        <CartContext.Provider value={state}>
            {children}
        </CartContext.Provider>
    )
    
}
CartContextProvider.prototype = {
    children: PropTypes.node,
};
export default CartContextProvider