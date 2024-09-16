export function isNotNull(inputName, val) {
    const res = {
        isValid: true,
        errorText: `${inputName || 'This feild'} can't not be NULL`
    }

    if (val.trim().length > 0)
        res.isValid = true
    else
        res.isValid = false

    return res
}

export function hasMinLength(min, inputName, val) {
    const res = {
        isValid: true,
        errorText: `${inputName || 'This feild'} must greater than ${min} characters`
    }

    if (val.trim().length >= min)
        res.isValid = true
    else
        res.isValid = false

    return res
}