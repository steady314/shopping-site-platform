import { createContext, useState } from "react";
const CartContext = createContext();
function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    function addToCart(product) {
        setCart((currentCart) => {
            const existingProduct = currentCart.find(
                (item) => item.id === product.id
            );
            if(existingProduct) {return currentCart.map((item) => item.id === product.id ? {...item, quantity: item.quantity + 1 } : item);}
            return [...currentCart, {...product, quantity: 1}];
        });
    }
    function increaseQuantity(productId) {
        setCart((currentCart) => 
        currentCart.map((item) => item.id === productId ? {...item, quantity: item.quantity + 1} : item));
    }
    function decreaseQuantity(productId) {
        setCart((currentCart) => currentCart .map((item) => item.id === productId ? {...item, quantity: item.quantity - 1 } : item) .filter((item) => item.quantity > 0))
    }
    function removeFromCart(productId) {
        setCart((currentCart) => currentCart.filter(
            (item) => item.id !== productId
        ));
    }
    return (
        <CartContext.Provider value={{
            cart, addToCart, increaseQuantity, decreaseQuantity, removeFromCart
        }}> {children} </CartContext.Provider>
    );
}
export { CartProvider };
export default CartContext;