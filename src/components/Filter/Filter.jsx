import * as React from 'react';
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectVariants({ value, handleChangeCategory}) {

  return (
    <div className="filter__element">
      <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">Фильтрация</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={value}
          onChange={handleChangeCategory}
        >
          <MenuItem value="">
            <em>Отфильтровать</em>
          </MenuItem>
          <MenuItem value="by_name">По наименованию</MenuItem>
          <MenuItem value="by_content">По содержанию</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
