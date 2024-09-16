import React, { useContext } from 'react';
import styles from './Cart.module.css'
import { CartContext } from '../../store/cart-context';
import CartItem from './CartItem';
import { ModalContext } from '../UI/Modal';
import Input from './Input';
import { hasMinLength, isNotNull } from '../../ultis/validateInput';
import { useInput } from '../../hooks/useInput';

function Cart(props) {
    const { items } = useContext(CartContext)
    const { close } = useContext(ModalContext)
    // name
    const { value: nameVal, onChange: onNameChange, onBlur: onNameBlur, isInvalid: isNameInvalid, errorText: nameErrorText }
        = useInput('', [isNotNull.bind(undefined, 'Name')])
    // street
    const { value: streetVal, onChange: onStreetChange, onBlur: onStreetBlur, isInvalid: isStreetInvalid, errorText: streetErrorText }
        = useInput('', [isNotNull.bind(undefined, 'Street')])
    // postal code (-   minLength = 6   -)
    const { value: postalCodVal, onChange: onPostalCodChange, onBlur: onPostalCodBlur, isInvalid: isPostalCodInvalid, errorText: postalCodErrorText }
        = useInput('', [
            isNotNull.bind(undefined, 'Postal code'),
            hasMinLength.bind(undefined, 6, 'Postal code')
        ])
    // city
    const { value: cityVal, onChange: onCityChange, onBlur: onCityBlur, isInvalid: isCityInvalid, errorText: cityErrorText }
        = useInput('', [isNotNull.bind(undefined, 'City')])


    const totalAmount = items.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0).toFixed(2)
    return (
        <>
            <ul className={styles['cart-items']}>
                {
                    items.map(i => {
                        return <CartItem item={i} key={i.id} />
                    })
                }
            </ul>
            <div className={styles['total']}>
                <span>Total Amount</span>
                <span>${totalAmount}</span>
            </div>
            <div>
                <Input label='Your Name' id='user-name'
                    value={nameVal} onChange={onNameChange} onBlur={onNameBlur} errorText={isNameInvalid && nameErrorText} />
                <Input label='Street' id='user-street'
                    value={streetVal} onChange={onStreetChange} onBlur={onStreetBlur} errorText={isStreetInvalid && streetErrorText} />
                <Input label='Postal Code' id='user-postal-code'
                    value={postalCodVal} onChange={onPostalCodChange} onBlur={onPostalCodBlur} errorText={isPostalCodInvalid && postalCodErrorText} />
                <Input label='City' id='user-city'
                    value={cityVal} onChange={onCityChange} onBlur={onCityBlur} errorText={isCityInvalid && cityErrorText} />
            </div>
            <div className={styles['actions']}>
                <button onClick={close}>Close</button>
                <button className={styles['button']}>Order</button>
            </div>
        </>
    );
}

export default Cart;