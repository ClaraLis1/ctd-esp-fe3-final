import { FC } from "react"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface Comic{
    image: string
    name: string
}

interface Props{
    comic:Comic
}
export const CardComic: FC = ({ name}:any) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained">Comprar </Button>
        <Button size="small" variant="contained" >Ver Detalle</Button>
      </CardActions>
    </Card>
    )
}