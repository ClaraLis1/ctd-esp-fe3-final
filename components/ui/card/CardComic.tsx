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

interface Props{
    comic:Comic
}
export const CardComic: FC<Props> = ({comic}) => {
    
    
    return (
    <Card sx={{ maxWidth: 345 ,  height:300 }}>
        <CardMedia
            component="img"
             alt='imagen de Marvel'
            height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
            //  image={comic.images.length>0? comic.images[0].path:""}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {comic.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {comic.title}
            </Typography>
        </CardContent>
        <Grid  display="flex" justifyContent="flex-end" alignItems="center">
        <CardActions >
            <Button size="small" variant="contained">Comprar </Button>
            <Button size="small" variant="contained" >Ver Detalle</Button>
        </CardActions>
        </Grid>
    </Card>
    )
}