import React, { useContext } from 'react';
import styles from './CartItem.module.css'
import { CartContext } from '../../store/cart-context';

function CartItem({ item }) {
    const { updateToCart } = useContext(CartContext)
    const { id, name, price, quantity } = item

    function increaseQuatity() {
        updateToCart(item, 1)
    }
    function decreaseQuantity() {
        updateToCart(item, -1)
    }

    return (
        <div className={styles['cart-item']}>
            <div>
                <h2>{name}</h2>
                <div className={styles['summary']}>
                    <span className={styles['price']}>{price}</span>
                    <span className={styles['amount']}>{quantity}</span>
                </div>
            </div>
            <div className={styles['actions']}>
                <button onClick={decreaseQuantity}>-</button>
                <button onClick={increaseQuatity}>+</button>
            </div>
        </div>
    );
}

export default CartItem;