import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box } from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const itemsType = ['Saare', 'Suite', 'Kurti', 'Lehenga'];

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

export const DropDownList = ({ id, labelId, label, name, value, defaultValue, multipSelect, handleChange, placeholder }) => {
    const theme = useTheme();
    return (
        <Box sx={{
            width: 390,
            maxWidth: '100%',
        }}>
            <FormControl required fullWidth>
                <InputLabel id={id}>{label}</InputLabel>
                <Select
                    id={id}
                    fullWidth
                    name={name}
                    value={value}
                    labelId={labelId}
                    MenuProps={MenuProps}
                    multiple={multipSelect}
                    onChange={handleChange}
                    placeholder={placeholder}
                    defaultValue={defaultValue}
                    input={<OutlinedInput label={label} />}
                >
                    {itemsType.map((item) => (
                        <MenuItem
                            key={item}
                            value={item}
                            style={getStyles(item, value, theme)}
                        >
                            {item}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}