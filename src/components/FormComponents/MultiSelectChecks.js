import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
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

const itemList = ['XS', 'SM', 'M', 'L', 'XL', 'XXL', 'XXL'];

export const MultipleSelectCheckmarks = ({ id, labelId, multiple, label, name, value, defaultValue, handleChange }) => {
    return (
        <Box sx={{
            width: 390,
            maxWidth: '100%',
        }}>
            <FormControl required fullWidth>
                <InputLabel id={id}>{label}</InputLabel>
                <Select
                    id={id}
                    name={name}
                    value={value}
                    labelId={labelId}
                    multiple={multiple}
                    MenuProps={MenuProps}
                    onChange={handleChange}
                    defaultValue={defaultValue}
                    input={<OutlinedInput label={label} />}
                    renderValue={(selected) => selected.join(', ')}
                >
                    {itemList.map((item) => (
                        <MenuItem key={item} value={item}>
                            <Checkbox checked={value.indexOf(item) > -1} />
                            <ListItemText primary={item} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}