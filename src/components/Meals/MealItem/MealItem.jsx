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


            </form>
        </div>
    );
}

export default MealItem;