import React, { useContext, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from '../UI/Modal'
import styles from './HeaderCartButton.module.css'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Cart from '../Cart/Cart';
import { CartContext } from '../../store/cart-context';

function HeaderCartButton(props) {
    const { items } = useContext(CartContext)
    const numberOfItems = items.length
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
                <span className={styles['badge']}>{numberOfItems}</span>
            </div>
        </>
    );
}

export default HeaderCartButton;