import React from 'react';

function OrderSuccess({ onClose }) {
    return (
        <div className='h-96 text-2xl text-right p-12' >
            <div className='flex justify-center items-center h-2/3'>
                <p className='font-semibold text-2xl'>You Ordered Successfully!</p>
            </div>
            <button onClick={onClose}
                className='bg-main text-white rounded px-8 py-2 '>OK</button>
        </div>
    );
}

export default OrderSuccess;