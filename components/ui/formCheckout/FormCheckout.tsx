import React from 'react'
import { FC, useState    } from "react"
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import {Controller, useForm} from 'react-hook-form'

interface Props{
    step: number
}

interface DataForm{
    name:string
    lastName: string
    mail: string
    address: string
    addressNumber:string
    city:string
    state:string
    zipCode: string|number
    creditCard: number
    creditCardName: string
    expirateDate:number
    securityCode: number
}

const defaultValues={    
        name:"",
        lastName:"",
        mail:"",    
        address: "",
        addressNumber:"",
        city:"",
        state:"",
        zipCode: "",       
        creditCard: "",
        creditCardName: "",
        expirateDate:"",
        securityCode: ""
    
}

const FormCheckout: FC<Props>  = ({step}) => {
    const[data, setData] = useState(defaultValues)
   

    const{control, handleSubmit, formState:{errors}, getValues} = useForm<DataForm>()
    const onSubmit=(data:any)=>{
        console.log(data);
        setData(data)
    }

    
    
    
    
  return (
    <Box sx={{maxWidth:'500px', margin:'0 auto'}}>
        <form onSubmit={handleSubmit(onSubmit)}>
        {step===1 && <Box>
        <Paper elevation={1} sx={{p:"24px", display:"flex", flexDirection:"column", gap:3 }}>
            <Typography> Datos Personales</Typography>
        </Paper>
        
            <Controller
                name='name'
                control={control}
                defaultValue={''}
                render={({field})=>(
                    <TextField
                        {...field}
                        type='text'
                        label='Nombre'
                        required
                        variant='outlined'
                        fullWidth
                        sx={{mb:2}}
                    />
                    
                )}
            />
             <Controller
                name='lastName'
                control={control}
                defaultValue={''}
                render={({field})=>(
                    <TextField
                        {...field}
                        type='text'
                        label='Apellido'   
                        required                     
                        variant='outlined'
                        fullWidth
                        sx={{mb:2}}
                    />
                    
                )}
            />
             <Controller
                name='mail'
                control={control}
                defaultValue={''}
                rules={{pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/}}
                render={({field})=>(
                    <TextField
                        {...field}
                        type='text'
                        label='Mail'
                        required
                        variant='outlined'
                        fullWidth
                        sx={{mb:2}}
                    />
                    
                )}
            />
            
        </Box>}
       
        {step===2 && <>
        <Paper elevation={1} sx={{p:"24px", display:"flex", flexDirection:"column", gap:3 }}>
            <Typography> Dirección de entrega</Typography>
        </Paper>        
            <Controller
                name='address'
                control={control}
                defaultValue={''}
                render={({field})=>(
                    <TextField
                        {...field}
                        type='text'
                        label='Dirección '
                        required
                        variant='outlined'
                        fullWidth
                        sx={{mb:2}}
                    />
                    
                )}
            />
             <Controller
                name='addressNumber'
                control={control}
                defaultValue={''}
                render={({field})=>(
                    <TextField
                        {...field}
                        type='text'
                        label='Departamento, piso, etc '
                        variant='outlined'
                        
                        fullWidth
                        sx={{mb:2}}
                    />                    
                )}
            />
             <Controller
                name='city'
                control={control}
                defaultValue={''}
                render={({field})=>(
                    <TextField
                        {...field}
                        type='text'
                        label='Ciudad'
                        required
                        variant='outlined'
                        fullWidth
                        sx={{mb:2}}
                    />                    
                )}
            />
            <Controller
                name='state'
                control={control}
                defaultValue={''}
                render={({field})=>(
                    <TextField
                        {...field}
                        type='text'
                        label='Provincia'
                        required
                        variant='outlined'
                        fullWidth
                        sx={{mb:2}}
                    />
                    
                )}
            />
            <Controller
                name='zipCode'
                control={control}
                defaultValue={''}
                rules={{required:true}}
                render={({field})=>(
                    <TextField
                        {...field}
                        type='text'
                        label='Codigo Postal'
                        required
                        variant='outlined'
                        fullWidth
                        sx={{mb:2}}
                    />
                    
                )}
            />
            
        </>}
        {step===3 && <Box>
            <Paper elevation={1} sx={{p:"24px", display:"flex", flexDirection:"column", gap:3 }}>
                <Typography> Datos de pago</Typography>
            </Paper>

                <Controller
                    name='creditCard'
                    control={control}                    
                    render={({field})=>(
                        <TextField
                            {...field}
                            type='number'
                            label='Número de tarjeta '
                            required
                            variant='outlined'
                            fullWidth
                            sx={{mb:2}}
                        />
                        
                    )}
                />
                <Controller
                    name='creditCardName'
                    control={control}
                    defaultValue={''}
                    render={({field})=>(
                        <TextField
                            {...field}
                            type='text'
                            label='Nombre como aparece en la tarjeta '
                            required
                            variant='outlined'
                            fullWidth
                            sx={{mb:2}}
                        />
                        
                    )}
                />
                <Controller
                    name='expirateDate'
                    control={control}                   
                    render={({field})=>(
                        <TextField
                            {...field}
                            type='date'
                            label='Fecha de expiración'
                            required
                            variant='outlined'
                            fullWidth
                            sx={{mb:2}}
                        />
                        
                    )}
                />
                <Controller
                    name='securityCode'
                    control={control}                    
                    render={({field})=>(
                        <TextField
                            {...field}
                            type='password'
                            label='Codigo de seguridad'
                            required
                            variant='outlined'
                            fullWidth
                            sx={{mb:2}}
                        />
                        
                    )}
                />
               
                
        </Box>}
        
            <Box sx={{display:'flex', flexDirection:'row', justifyContent: "space-evenly", margin: "5px"}}>
                <Button size="small" sx={{width:"300px"}} variant="contained" type='submit' >guardar </Button>
            </Box>
        </form>
    </Box>
  )
}

export default FormCheckout