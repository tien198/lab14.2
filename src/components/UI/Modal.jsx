import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
// css
import styles from './Modal.module.css'



const Modal = forwardRef(function Modal({ children }, ref) {
    const [hidden, setHidden] = useState('hidden')
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            hide()
        }
    })
    function show() {
        setHidden('')
    }
    function hide() {
        setHidden('hidden')
    }
    useImperativeHandle(ref, () => {
        return {
            open() {
                show()
            },
            close() {
                hide()
            }
        }
    })

    return createPortal(
        <div className={hidden} >
            <div className={styles.backdrop} onClick={hide}></div>
            <div className={styles.modal}>
                {children}
            </div>
        </div>,
        document.getElementById('modal')
    )
})

export default Modal;