import { useState } from "react"

/**
 * @param {Array<Function>} validateFnArr - the validate functions Array (function should be use bind method to init arguments before passing to array) All function will be looped through for loop and break every invalid to return false and invalid message
 */
export function useInput(initVal, validateFnArr) {
    const [value, setValue] = useState(initVal)
    const [isEdited, setIsEdited] = useState(false)
    let errorText = ''
    let isInvalid = false

    function onChange(e) {
        setValue(e.target.value)
    }
    function onBlur() {
        setIsEdited(true)
    }
    function onReset() {
        setValue('');
        setIsEdited(false)
    }

    for (let i = 0; i < validateFnArr.length; i++) {
        // call the function through loop. Passing 'value' as argument
        const result = validateFnArr[i](value)

        if (!result.isValid) {
            errorText = result.errorText
            isInvalid = isEdited && !result.isValid
            break
        }
    }


    return {
        value,
        onChange,
        isEdited,
        onBlur,
        isInvalid,
        errorText,
        onReset
    }

}