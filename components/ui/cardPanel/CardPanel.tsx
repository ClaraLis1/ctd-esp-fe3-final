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
export const CardPanel: FC<Props> = ({data}) => {
    
     const router = useRouter()
     
     const handleComprar = () => {    
        
        router.push(`/checkout/${data.id}`);   
     };
    
    return (        
     
    <Card sx={{ margin:"0 auto" , maxWidth :"70%" , height: "80px", backgroundColor:"grey", display: "flex", flexDirection: "row"}}>
        <CardMedia
            component="img"
             alt='imagen de Marvel'
            height="250"

            image={`${data?.thumbnail.path}.${data?.thumbnail.extension}`}
            />
        <CardContent sx={{display: "flex", flexDirection: "column", justifyContent:"space-around"}}>                   
            <Typography variant="body2" color="text.secondary">
                Comic: {data.title}
            </Typography>
            <Typography variant="body2" color="blue">
            {`Precio  $${data.price}`}
            </Typography>                        
        </CardContent>
        
    </Card>
    )
}