import React, { useContext, useEffect, useRef } from 'react';
import styles from './MealItemForm.module.css';
import CartContext from '../../../store/cart-context';

function MealItemForm({ children, item, itemAmount }) {
    const { items, addToCart } = useContext(CartContext)
    const formRef = useRef()
    const { id, name, description, price } = item

    function onSubmit(e) {
        e.preventDefault()

    }
    return (
        <form ref={formRef} onSubmit={onSubmit} className={styles['form']}>
            {children}
        </form>
    );
}

export default MealItemForm;