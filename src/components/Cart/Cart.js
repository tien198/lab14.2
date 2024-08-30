import React, { useContext } from 'react';
import styles from './Cart.module.css'
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

function Cart(props) {
    const { items } = useContext(CartContext)
    return (
        <>
            <ul className={styles['cart-items']}>
                {
                    items.map(i => {
                        <CartItem item={i} />
                    })
                }
            </ul>
            <div className={styles['total']}>
                <span>Total Amount</span>
                <span>${10}</span>
            </div>
            <div className={styles['actions']}>
                <button>Close</button>
                <button className={styles['button']}>Order</button>
            </div>
        </>
    );
}

export default Cart;