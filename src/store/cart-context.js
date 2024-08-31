import React, { useReducer } from 'react';
const { createContext } = require("react");


export const CartContext = createContext({
    items: [{ id: 'm1', name: 'Sushi', description: 'Finest fish and veggies', price: 22.99, quantity: 1 }],
    addToCart(item, amount) { },
    updateToCart(item, amount) { },
    removeFromCart(id) { }
})

function cartReducer(state, action) {
    const { type, payload } = action
    const items = [...state]

    if (type === 'ADD_ITEM') {
        const { item, amount } = payload

        const { id } = item
        // Existing item index
        const index = items.findIndex(i => i.id === id)
        const existingItem = items[index]


        if (existingItem) {

            const updateItem = {
                ...existingItem,
                quantity: Number(existingItem.quantity) + Number(amount)
            }
            items[index] = updateItem
        }
        else {
            items.push(item)
        }
    }

    else if (type === 'UPDATE_ITEM') {
        const { item, amount } = payload
        const { id } = item
        // existing Item
        const index = items.findIndex(i => i.id === id)
        const existingItem = items[index]

        const updateItem = {
            ...existingItem,
            quantity: Number(existingItem.quantity) + Number(amount)
        }

        items[index] = updateItem
        if (updateItem.quantity < 0) {
            items.splice(index, 1)
        }
    }

    else if (type === 'REMOVE_ITEM') {
        const { itemId } = payload
        const index = items.findIndex(i => i.id === itemId)
        items.splice(index, 1)
    }
    return items
}

export function CartProvider({ children }) {
    const [itemsState, dispathItemsState] = useReducer(cartReducer, [])

    function addToCart(item, amount) {
        dispathItemsState({
            type: 'ADD_ITEM',
            payload: {
                item,
                amount
            }
        })
    }

    function updateToCart(item, amount) {
        dispathItemsState({
            type: 'UPDATE_ITEM',
            payload: {
                item,
                amount
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
        addToCart,
        updateToCart,
        removeFromCart
    }
    return (
        <CartContext.Provider value={cartContext}>
            {children}
        </CartContext.Provider>
    );
}
