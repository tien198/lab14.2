import React from 'react';
import styles from './Input.module.css'

// Component receive a inputVal as state, and a onChangeVal as setState for 2-ways binding
function Input({ label, type, id, ...props }) {
    return (
        <div className={styles.input}>
            <label htmlFor={id}>
                {label}
            </label>
            <input id={id} type={type} className='ml-4' {...props} />
        </div>
    );
}

export default Input;