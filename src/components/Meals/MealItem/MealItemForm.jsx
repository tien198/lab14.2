import React from 'react';
import styles from './MealItemForm.module.css';

function MealItemForm({ children, onSubmit }) {
    return (
        <form onSubmit={onSubmit} className={styles['form']}>
            {children}
        </form>
    );
}

export default MealItemForm;