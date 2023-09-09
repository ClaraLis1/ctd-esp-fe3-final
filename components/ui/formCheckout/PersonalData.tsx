import { ErrorMessage } from '@hookform/error-message'
import { Box, Typography } from '@mui/material'
import React from 'react'
import { CustomTextField } from './inputs/CustomTextFields'
import { useFormContext } from 'react-hook-form'


const PersonalData = () => {
    const {control, formState:{errors}} =useFormContext()

  return (
    <>
        <Box key={"personal"}>
            <CustomTextField
                name="name"
                label="Nombre"
                type="text"
                control={control}
                defaultValue=""
            />

            <Typography variant='caption' color='red'>
                <ErrorMessage errors={errors} name="name" />
            </Typography>

            <CustomTextField
                name="lastName"
                label="Apellido"
                type="text"
                control={control}
                defaultValue=""
            />


            <Typography variant='caption' color='red'>
                <ErrorMessage errors={errors} name="lastName" />
            </Typography>

            <CustomTextField
                name="email"
                label="Correo"
                type="email"
                control={control}
                defaultValue=""
            />

            <Typography variant='caption' color='red'>
                <ErrorMessage errors={errors} name="email" />
            </Typography>
        </Box>
    </>
  )
}

export default PersonalData