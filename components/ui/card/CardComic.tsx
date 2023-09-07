import { FC } from "react"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { ImagesearchRoller } from "@mui/icons-material";

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
    key: number
    title:string
    image: Image | undefined 
}
export const CardComic: FC<Props> = ({title, image}) => {
    
    const imageUrl = `${image?.path}.${image?.extension}`
    
    return (
        
    <Card sx={{ maxWidth: 345 ,  height:300, backgroundColor:"grey"}}>
        <CardMedia
            component="img"
             alt='imagen de Marvel'
            height="140"
                image={imageUrl? imageUrl: ""}
            />
        <CardContent>
          
            <Typography variant="body2" color="text.secondary">
            {title}
            </Typography>
        </CardContent>
        <Grid  display="flex" justifyContent="flex-end" alignSelf='flex-end' alignItems="center">
        <CardActions >
            <Button size="small" variant="contained" >Comprar </Button>
            <Button size="small" variant="contained" >Ver Detalle</Button>
        </CardActions>
        </Grid>
    </Card>
    )
}