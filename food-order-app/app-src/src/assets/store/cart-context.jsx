import { createContext, useReducer } from "react";


export const CartContext = createContext({
    items: [],
    addToCart: (item) => { },
    removeFromCart: (id) => { },
})

const cartReducer = (state, action) => {
    if (action.type === 'ADD_ITEM') {
        // Updated Item
        const updatedItems = [ ...state.items ]
        // Add item to cart
        const existingCartItemIndex = state.items.findIndex((item) => {
            console.log(item.id, action.item.id);
            return action.item.id = item.id
        })
        if (existingCartItemIndex > -1) {
            // Merge
            const existingItem = state.items[existingCartItemIndex]
            const item = {
                ...existingItem,
                quantity: existingItem.quantity += 1
            }
            updatedItems[existingCartItemIndex] = item
            console.log(`Logged at the i > 0`)
        } else {
            
            updatedItems.push({
                ...action.item,
                quantity: 1
            })
            console.log(`Logged at the i < 0`)
        }

        console.log(existingCartItemIndex);
        return { ...state, items: updatedItems }
    } else if (action.type === 'REMOVE_ITEM') {
        const existingCartItemIndex = state.items.findIndex((item) => id = item.id)
        const updatedItems = state.items
        if( updatedItems[ existingCartItemIndex].quantity === 1){
            updatedItems.splice(existingCartItemIndex, 1)
            // updatedItems = newItems
        }else{
            updatedItems[existingCartItemIndex] = updatedItems[ existingCartItemIndex].quantity - 1
        }
        return {
            ...state,
            items: updatedItems
        }
    } 
    return state
    
}

function CartContextProvider({ children }) {
    const [cart, dispatch ] = useReducer(cartReducer, { items: [], })

    function addToCart(item) {
        // console.log(items)
        dispatch({
            type: 'ADD_ITEM',
            item
        })
    }
    
    function removeFromCart(id) {
        dispatch({
            type: 'REMOVE_ITEM',
            id
        })
    }

    const cartContextValue = {
        items: cart.items,
        addToCart: addToCart,
        removeFromCart: removeFromCart
    }

    console.log(cartContextValue);
    console.log(`Logged at the component`)

    return (
        <CartContext.Provider value={cartContextValue}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;