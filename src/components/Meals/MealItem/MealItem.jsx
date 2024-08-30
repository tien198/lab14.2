import React, { useContext, useState } from 'react';
import styles from './MealItem.module.css'
import Input from '../../UI/Input';
import MealItemForm from './MealItemForm';

function MealItem({ item }) {
    const [amount, setAmount] = useState(0)
    function onChangeVal(e) {
        setAmount(e.target.value)
    }
    return (
        <div className={styles.meal}>
            <div className='flex flex-col gap-1'>
                <h3 className='font-semibold'>{item.name}</h3>
                <span className={styles.description}>{item.description}</span>
                <span className={styles.price}>${item.price}</span>
            </div>
            <MealItemForm item={item} itemAmount={amount}>
                <Input inputVal={amount} onChangeVal={onChangeVal} />
                <button>+ Add</button>
            </MealItemForm>
        </div>
    );
}

export default MealItem;