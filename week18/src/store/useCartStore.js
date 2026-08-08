import {create} from 'zustand';
import {persist} from 'zustand/middleware';

const useCartStore = create(
    persist(
        (set, get) => ({
            cartItems : [],

            addToCart : (product) => 
                set((state) => {
                    const existItem = state.cartItems.find(
                        (item) => item.id === product.id
                    );

                    if (existItem) {
                        return {
                            cartItems : state.cartItems.map((item) =>
                            item.id === product.id ? {...item, quantity : item.quantity+1} : item),
                        };
                    }

                    return { cartItems : [...state.cartItems, {...product, quantity : 1}],};
                }),

            removeFromCart : (index) => 
                set((state) => ({
                    cartItems : state.cartItems.filter((_, i)=> i !== index),
                })),
            
            plusFromCart : (id) =>
                set((state) => ({
                    cartItems : state.cartItems.map((item) =>
                    item.id === id ? {...item, quantity : item.quantity+1} : item),
                })),
            
            minusFromCart : (id) =>
                set((state) => ({
                    cartItems : state.cartItems.map((item) => item.id === id ? {...item, quantity : item.quantity -1} : item),
                })),
            
            clearCart : () => // 결제하면 장바구니 싹 비워지게하려고
                set({
                    cartItems : [],
                }),
            
            getTotalPrice : () => 
                get().cartItems.reduce(
                    (total, item) => total + item.price * item.quantity, 0
                ),
        }),

        {name : 'cart-storage'}
    )
);

export default useCartStore;