import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useFormContext} from 'react-hook-form'
import { CustomTextField } from './inputs/CustomTextFields';
import { ErrorMessage } from '@hookform/error-message';

const PaymentData = () => {
    const {control, formState:{errors}} =useFormContext()

  return (
    <>
        <CustomTextField
            name="number"
            label="Numero de Tarjeta"
            type="text"
            control={control}
            defaultValue=""
        />

        <Typography variant='caption' color='red'>
            <ErrorMessage errors={errors} name="number" />
        </Typography>

        <CustomTextField
            name="nameOnCard"
            label="Nombre en la Tarjeta"
            type="text"
            control={control}
            defaultValue=""
        />

        <Typography variant='caption' color='red'>
            <ErrorMessage errors={errors} name="nameOnCard" />
        </Typography>

        <CustomTextField
            name="cvc"
            label="codigo de seguridad cvc"
            type="text"
            control={control}
            defaultValue=""
        />

        <Typography variant='caption' color='red'>
            <ErrorMessage errors={errors} name="cvc" />
        </Typography>

        <CustomTextField
            name="expDate"
            label="Fecha de expiración"
            type="text"
            control={control}
            defaultValue=""
        />

        <Typography variant='caption' color='red'>
            <ErrorMessage errors={errors} name="expDate" />
        </Typography>           
        </>
  )
}

export default PaymentData