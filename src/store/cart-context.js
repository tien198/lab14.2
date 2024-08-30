const { createContext } = require("react");

const CartContext = createContext({
    items: [],
    addToCart: (item) => { },
    removeItem: (id) => { }
})

export default CartContext