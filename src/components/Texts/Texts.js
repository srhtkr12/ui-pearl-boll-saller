import { TextField } from '@mui/material'
import React from 'react'

const Texts = (
    textName,
    textStyle,
    textLabel,
    textValue,
    textError,
    textRequired,
    handleChange,
    textPlaceholder,
    textDefaultValue,
) => {
    return (
        <TextField
            error
            id="outlined-error-helper-text"
            label="Email"
            defaultValue=""
            placeholder='Email'
            onChange={handleChange}
        // helperText="Incorrect entry."
        />
    )
}

export default Texts