import React, { useContext, useState } from 'react';
import styles from './Cart.module.css'
import { CartContext } from '../../store/cart-context';
import CartItem from './CartItem';
import { ModalContext } from '../UI/Modal';
import Input from './Input';
import { hasMinLength, isNotNull } from '../../ultis/validateInput';
import { useInput } from '../../hooks/useInput';
import OrderSuccess from './SuccessOrder';

function Cart(props) {

    const { items, resetCart } = useContext(CartContext)
    const { close } = useContext(ModalContext)
    const [isOrderd, setIsOrdered] = useState(false)

    // name
    const { value: nameVal, onChange: onNameChange, onBlur: onNameBlur, isInvalid: isNameInvalid, errorText: nameErrorText, onReset: onNameReset }
        = useInput('', [isNotNull.bind(undefined, 'Name')])
    // street
    const { value: streetVal, onChange: onStreetChange, onBlur: onStreetBlur, isInvalid: isStreetInvalid, errorText: streetErrorText, onReset: onStreetReset }
        = useInput('', [isNotNull.bind(undefined, 'Street')])
    // postal code (-   minLength = 6   -)
    const { value: postalCodVal, onChange: onPostalCodChange, onBlur: onPostalCodBlur, isInvalid: isPostalCodInvalid, errorText: postalCodErrorText, onReset: onPostalCodeReset }
        = useInput('', [
            isNotNull.bind(undefined, 'Postal code'),
            hasMinLength.bind(undefined, 6, 'Postal code')
        ])
    // city
    const { value: cityVal, onChange: onCityChange, onBlur: onCityBlur, isInvalid: isCityInvalid, errorText: cityErrorText, onReset: onCityReset }
        = useInput('', [isNotNull.bind(undefined, 'City')])


    const totalAmount = items.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0).toFixed(2)

    function resetInputVals() {
        onNameReset(); onStreetReset(); onPostalCodeReset(); onCityReset();
    }

    function onSubmit(e) {
        e.preventDefault()
        onNameBlur(); onStreetBlur(); onPostalCodBlur(); onCityBlur()
        if (isNameInvalid || isStreetInvalid || isPostalCodInvalid || isCityInvalid)
            return

        resetCart()
        resetInputVals()
        setIsOrdered(true)
    }

    function onCloseOrderSuccess() {
        close()
        setIsOrdered(false)
    }
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape')
            setIsOrdered(false)
    })

    if (isOrderd)
        return <OrderSuccess onClose={onCloseOrderSuccess} />
    else
        return (
            <div className='max-h-96 overflow-auto'>
                <form onSubmit={onSubmit}>
                    <ul className={styles['cart-items']}>
                        {
                            items.map(i => {
                                return <CartItem item={i} key={i.id} />
                            })
                        }.
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
                        <button type='button' onClick={close}>Close</button>
                        <button className={styles['button']}>Order</button>
                    </div>
                </form>
            </div>
        )
}

export default Cart;