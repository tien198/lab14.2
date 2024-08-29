import React from 'react';
import styles from './Input.module.css'

function Input(props) {
    return (
        <div className={styles.input}>
            <label>
                Amount
                <input type='number' className='ml-4' />
            </label>
            <button className='bg-main text-white font-semibold rounded-xl px-8 py-1'>+ Add</button>
        </div>
    );
}

export default Input;