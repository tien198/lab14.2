import React, { useContext, useState } from 'react';
import styles from './MealItem.module.css'
import Input from '../../UI/Input';
import MealItemForm from './MealItemForm';
import { CartContext } from '../../../store/cart-context';

function MealItem({ item }) {
    const { addToCart } = useContext(CartContext)
    const [amount, setAmount] = useState(0)

    function onChangeVal(e) {
        setAmount(e.target.value)
    }
    function onSubmit(e) {
        e.preventDefault()
        const addedItem = { ...item, quantity: Number(amount) }
        addToCart(addedItem, amount)
        clearInput()
    }
    function clearInput() {
        setAmount(0)
    }
    return (
        <div className={styles.meal}>
            <div className='flex flex-col gap-1'>
                <h3 className='font-semibold'>{item.name}</h3>
                <span className={styles.description}>{item.description}</span>
                <span className={styles.price}>${item.price}</span>
            </div>
            <MealItemForm onSubmit={onSubmit}>
                <Input type='number' inputVal={amount} onChangeVal={onChangeVal} min={0} />
                <button>+ Add</button>
            </MealItemForm>
        </div>
    );
}

export default MealItem;