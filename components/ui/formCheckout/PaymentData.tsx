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
            name="card.number"
            label="Numero de Tarjeta"
            type="text"            
            control={control}
            defaultValue="4242424242424242"
        />

        <Typography variant='caption' color='red'>
            <ErrorMessage errors={errors} name="card.number" />
        </Typography>

        <CustomTextField
            name="card.nameOnCard"
            label="Nombre en la Tarjeta"
            type="text"
            control={control}
            defaultValue=""
        />

        <Typography variant='caption' color='red'>
            <ErrorMessage errors={errors} name="card.nameOnCard" />
        </Typography>

        <CustomTextField
            name="card.cvc"
            label="codigo de seguridad cvc"
            type="password"
            control={control}
            defaultValue=""
        />

        <Typography variant='caption' color='red'>
            <ErrorMessage errors={errors} name="card.cvc" />
        </Typography>

        <CustomTextField
            name="card.expDate"
            label="Fecha de expiración"
            type="text"
            control={control}
            defaultValue=""
        />

        <Typography variant='caption' color='red'>
            <ErrorMessage errors={errors} name="card.expDate" />
        </Typography>           
        </>
  )
}

export default PaymentData