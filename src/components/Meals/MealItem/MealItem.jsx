import React from 'react';
import styles from './MealItem.module.css'
import Input from '../../UI/Input';

function MealItem({ item }) {
    return (
        <div className={styles.meal}>
            <div className='flex flex-col gap-1'>
                <h3 className='font-semibold'>{item.name}</h3>
                <span className={styles.description}>{item.description}</span>
                <span className={styles.price}>${item.price}</span>
            </div>
            <form>
                <Input />
                <button className='bg-main text-white font-semibold rounded-xl px-8 py-1'>+ Add</button>
            </form>
        </div>
    );
}

export default MealItem;