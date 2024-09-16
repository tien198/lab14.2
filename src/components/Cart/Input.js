import React from 'react';

// Component receive a inputVal as state, and a onChangeVal as setState for 2-ways binding
function Input({ label, type, id, value, onChange, onBlur, ...props }) {
    return (
        <div className='flex flex-col gap-1 mb-3'>
            <label className='font-semibold' htmlFor={id}>
                {label}
            </label>
            <input id={id} type={type} className='border rounded-md border-gray-600 max-w-96'
                value={value} onChange={onchange} onBlur={onBlur} {...props} />
        </div>
    );
}

export default Input;