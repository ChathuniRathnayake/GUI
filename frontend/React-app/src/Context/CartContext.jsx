import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    const onAddToCart = (course) => {
        setCartItems([...cartItems, course]);
    };

    const removeFromCart = (courseToRemove) => {
        setCartItems(cartItems.filter(item => item.id !== courseToRemove.id));
    };

    return (
        <CartContext.Provider value={{ cartItems, onAddToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}
