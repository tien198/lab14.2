import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './HeaderCartButton.module.css'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function HeaderCartButton(props) {
    return (
        <div className={styles.button}>
            <FontAwesomeIcon icon={faCartShopping} />
            <span>Your Cart</span>
            <span className={styles.badge}>2</span>
        </div>
    );
}

export default HeaderCartButton;