import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import {Controller, useForm, useFormContext} from 'react-hook-form'
import { CustomTextField } from './inputs/CustomTextFields';
import { ErrorMessage } from '@hookform/error-message';


const AddressData = () => {
    const {control, formState:{errors}} =useFormContext()

  return (
    <>
       <CustomTextField
            name="address.address1"
            label="Direccion"
            type="text"
            control={control}
            defaultValue=""
        />

        <Typography variant='caption' color='red'>
            <ErrorMessage errors={errors} name="address.address1" />
        </Typography>

        <CustomTextField
            name="address.address2"
            label="numero"
            type="text"
            control={control}
            defaultValue=""
        />
        <Typography variant='caption' color='red'>
            <ErrorMessage errors={errors} name="address.address2" />
        </Typography>

        <CustomTextField
            name="address.city"
            label="Ciudad"
            type="text"
            control={control}
            defaultValue=""
        />
        <Typography variant='caption' color='red'>
            <ErrorMessage errors={errors} name="address.city" />
        </Typography>

        <CustomTextField
            name="address.state"
            label="Provincia"
            type="text"
            control={control}
            defaultValue=""
        />
        <Typography variant='caption' color='red'>
            <ErrorMessage errors={errors} name="address.state" />
        </Typography>

        <CustomTextField
            name="address.zipCode"
            label="Codigo Postal"
            type="text"
            control={control}
            defaultValue=""
        />
        <Typography variant='caption' color='red'>
            <ErrorMessage errors={errors} name="address.zipCode" />
        </Typography>



        </>
  )
  
}

export default AddressData