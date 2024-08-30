import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from '../UI/Modal'
import styles from './HeaderCartButton.module.css'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Cart from '../Cart/Cart';

function HeaderCartButton(props) {
    const modal = useRef()
    function showModal() {
        modal.current.open()
    }
    return (
        <>
            <Modal ref={modal}>
                <Cart />
            </Modal>
            <div className={styles.button} onClick={showModal}>
                <FontAwesomeIcon icon={faCartShopping} />
                <span>Your Cart</span>
                <span className={styles['badge']}>2</span>
            </div>
        </>
    );
}

export default HeaderCartButton;