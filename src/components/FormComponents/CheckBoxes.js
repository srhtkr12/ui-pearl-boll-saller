import React from 'react'
import { Checkbox, FormControlLabel } from '@mui/material'

export const CheckBoxes = ({ name, label, checked, handleChange, labelPlacement }) => {
  return (
    <FormControlLabel
      control={<Checkbox
        name={name}
        checked={checked}
        onChange={handleChange}
      />}
      label={label}
      labelPlacement={labelPlacement}
    />
  )
}