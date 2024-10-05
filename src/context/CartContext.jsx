import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { products } from '../data/product';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    const addToCart = (id) => {
        const productFound = products.find(product => product.id === id);
        const productInCart = cart.find(product => product.id === id);
        let newCart;
        if (productInCart) {
            newCart = cart.map(product => product.id === id ? { ...product, quantity: product.quantity + 1 } : product);
        } else {
            newCart = [...cart, { ...productFound, quantity: 1 }];
        }
        setCart(newCart);
    };

    const increaseQuantity = (id) => {
        const newCart = cart.map(product => product.id === id ? { ...product, quantity: product.quantity + 1 } : product);
        setCart(newCart);
    };

    const decreaseQuantity = (id) => {
        const productInCart = cart.find(product => product.id === id);
        let newCart;
        if (productInCart.quantity === 1) {
            newCart = cart.filter(product => product.id !== id);
        } else {
            newCart = cart.map(product => product.id === id ? { ...product, quantity: product.quantity - 1 } : product);
        }
        setCart(newCart);
    };

    const addFavorite = (id) => {
        if (!favorites.includes(id)) {
            const newFavorites = [...favorites, id];
            setFavorites(newFavorites);
        }
    };

    const removeFavorite = (id) => {
        const newFavorites = favorites.filter(favId => favId !== id);
        setFavorites(newFavorites);
    };

    const state = { cart, addToCart, increaseQuantity, decreaseQuantity, favorites, addFavorite, removeFavorite };

    return (
        <CartContext.Provider value={state}>
            {children}
        </CartContext.Provider>
    );
};

CartContextProvider.propTypes = {
    children: PropTypes.node,
};

export default CartContextProvider;
