import React from 'react';
import styles from './Input.module.css'

function Input(props) {
    return (
        <div className={styles.input}>
            <label>
                Amount
                <input type='number' className='ml-4' />
            </label>
        </div>
    );
}

export default Input;