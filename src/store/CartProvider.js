import React, { useReducer } from 'react';
import CartContext from './cart-context';
import { DUMMY_MEALS } from '../dummyData';

function cartReducer(state, action) {
    const { type, payload } = action
    const items = [...state]

    if (type === 'ADD_ITEM') {
        const { itemId } = payload
        // Existing item index
        const index = items.findIndex(i => i.id === itemId)
        const existingItem = items[index]
        if (existingItem) {
            const updateItem = {
                ...existingItem,
                quantity: existingItem.quantity + 1
            }
            items[index] = updateItem
        }
        else {
            const newItem = DUMMY_MEALS.find(i => i.id === itemId)
            items.push({ ...newItem, quantity: 1 })
        }
    }
    else if (type === 'REMOVE_ITEM') {
        const { itemId } = payload
        const index = items.findIndex(i => i.id === itemId)
        items.splice(index, 1)
    }
    return items
}
const testData = [{
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
    quantity: 1
},
{
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
    quantity: 1
},]
function CartProvider({ children }) {
    const [itemsState, dispathItemsState] = useReducer(cartReducer, [...testData])

    function addToCart(id) {
        dispathItemsState({
            type: 'ADD_ITEM',
            payload: {
                itemId: id
            }
        })
    }

    function removeFromCart(id) {
        dispathItemsState({
            type: 'REMOVE_ITEM',
            payload: {
                itemId: id
            }
        })
    }

    const cartContext = {
        items: itemsState,
        addToCart: addToCart,
        removeItem: removeFromCart
    }
    return (
        <CartContext.Provider value={cartContext}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;