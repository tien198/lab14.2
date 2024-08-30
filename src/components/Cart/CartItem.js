import React from 'react';
import styles from './CartItem.module.css'

function CartItem({ item }) {
    const { name, price, quantity } = item

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
                <button>-</button>
                <button>+</button>
            </div>
        </div>
    );
}

export default CartItem;