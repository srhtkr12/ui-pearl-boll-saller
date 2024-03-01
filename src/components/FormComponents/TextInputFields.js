import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const TextInputFields = ({ id, multiline, rows, label, name, value, type, required, defaultValue, handleChange }) => {
    return (
        <Box
            sx={{
                width: name !== 'description' ? 390 : 790,
                maxWidth: '100%',
            }}
        >
            <TextField
                id={id}
                fullWidth
                type={type}
                name={name}
                rows={rows}
                label={label}
                value={value}
                required={required}
                placeholder={label}
                multiline={multiline}
                onChange={handleChange}
                defaultValue={defaultValue}
            />
        </Box>
    );
}