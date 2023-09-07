import { FC } from "react"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useRouter } from "next/router";


interface Comic{
    images: []
    title: string
    id: number
}

interface Image{
    path: string
    extension: string
}

interface Props{
    data:any
}
export const CardDetail: FC<Props> = ({data}) => {
     const image = data.images[0]   
     const imageUrl = `${image?.path}.${image?.extension}`
     const router = useRouter()
     
     const handleComprar = () => {       
        
        router.push(`/checkout`);   
     };
    
    return (        
    <Card sx={{ margin:"0 auto" , maxWidth: 345 ,  backgroundColor:"grey"}}>
        <CardMedia
            component="img"
             alt='imagen de Marvel'
            height="250"
                image={imageUrl? imageUrl: ""}
            />
        <CardContent>
          
            <Typography variant="body2" color="text.secondary">
                {data.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {data.description}
            </Typography>
            <Typography variant="body2" color="blue">
            {`Precio  $${data.price}`}
            </Typography>
            <Typography sx={{ textDecoration: 'line-through' }} variant="body2" color="red" >
            {`Precio Anterior $${data.oldPrice}`}
            </Typography>
        </CardContent>
        <Grid  display="flex" justifyContent="flex-end" alignSelf='flex-end' alignItems="center">
        <CardActions >
            <Button onClick={handleComprar} size="small" variant="contained"  disabled={data.stock == 0}>Comprar </Button>
            
        </CardActions>
        </Grid>
    </Card>
    )
}