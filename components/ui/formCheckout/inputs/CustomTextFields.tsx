import { TextField } from '@mui/material';
import React, { ChangeEvent, FocusEvent } from "react";
import { Control, Controller } from 'react-hook-form';

interface CustomTextFieldProps {
  name: string;
  label: string;
  type: string;
  required?: boolean;
  control: Control<any>;
  defaultValue?: string;
  error?: boolean;
  message?: string;
  textFieldProps?: Record<string, any>;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  autocomplete:string;

}

export const CustomTextField = ({
  name,
  label,
  type,
  required,
  control,
  defaultValue,
  textFieldProps,
  error,
  message,
}: CustomTextFieldProps) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
         render={({ field }) => (
        <TextField
          {...field}
          type={type}
          label={label}
          variant="outlined"
          fullWidth
          required={required}
          sx={{ mb: 2 }}
          {...textFieldProps}
         
        />
      )}
    />
  );
};