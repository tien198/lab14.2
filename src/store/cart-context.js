const { createContext } = require("react");

const CartContext = createContext({
    items: [{ id: 'm1', name: 'Sushi', description: 'Finest fish and veggies', price: 22.99, quantity: 1 }],
    addToCart: (item) => { },
    removeItem: (id) => { }
})

export default CartContext