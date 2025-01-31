import { useContext, useState, useEffect, createContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : [];
    });


    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);


    const agregarCarrito = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item.id === product.id);
            if (existingProduct) {
                return prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };


    const retirarCarrito = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    };


    const actualizarCarrito = (productId, quantity) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === productId ? { ...item, quantity } : item
            )
        );
    };


    const limpiarCarrito = () => {
        setCart([]);
    };


    const calcularTotal = () => {
        return cart.reduce((total, item) => total + item.precio * item.quantity, 0);
    };


    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    const obtenerCarrito = () => {
        return cart;
    };

    return (
        < CartContext.Provider
            value={{

                cart,
                agregarCarrito,
                retirarCarrito,
                actualizarCarrito,
                limpiarCarrito,
                calcularTotal,
                obtenerCarrito,
                totalItems,
            }}
        >
            {children}
        </CartContext.Provider >

    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart pertenece a CartProvider, revisa la importacion");
    }
    return context;
};