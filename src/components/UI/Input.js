import React from 'react';
import styles from './Input.module.css'

// Component receive a inputVal as state, and a onChangeVal as setState for 2-ways binding
function Input({ inputVal, onChangeVal }) {
    return (
        <div className={styles.input}>
            <label>
                Amount
                <input type='number' className='ml-4' value={inputVal} onChange={onChangeVal} />
            </label>
        </div>
    );
}

export default Input;