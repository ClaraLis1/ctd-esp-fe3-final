import React, { FC } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';

interface Props{
    data: any    
    nombre: string | undefined
    apellido: string | undefined
    direccion: string | undefined
    ciudad: string | undefined
    provincia: string | undefined
}

const CardConfirm: FC<Props>= (props) => {
  return (
    <>
   
     <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          max-height="180"
            image={`${props?.data.thumbnail.path}.${props.data?.thumbnail.extension}`}
          alt={props.data.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.data.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Box sx={{ maxWidth: 345 }}>
      
        
          <Typography gutterBottom variant="h5" component="div">
            Comic: {props.data.title}
          </Typography>
          <Typography variant="body2" sx={{ fontSize: 18 }} color="text.secondary">
            precio: {props.data.price}
          </Typography>
          <Typography sx={{marginTop: "10px"}}gutterBottom variant="h5" component="div">
            Datos de envio
          </Typography>
          <Typography sx={{ fontSize: 20 }} variant="body2" color="text.secondary">
            Destinatario: {props.nombre} {props.apellido}
          </Typography>
          <Typography sx={{ fontSize: 18 }} variant="body2" color="text.secondary">
            Direccion: {props.direccion}
          </Typography>
          <Typography sx={{ fontSize: 18 }} variant="body2" color="text.secondary">
            Ciudad: {props.ciudad}
          </Typography>
          <Typography sx={{ fontSize: 18 }} variant="body2" color="text.secondary">
            Provincia: {props.provincia}
          </Typography>
        
    </Box>
    </>
  )
}

export default CardConfirm