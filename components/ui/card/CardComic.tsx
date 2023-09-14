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
import BoltIcon from '@mui/icons-material/Bolt';


interface Image{
    path: string
    extension: string
}

interface Props{
    id:number
    key: number
    title:string
    image: Image | undefined 
    
}
export const CardComic: FC<Props> = ({title, image, id}) => {
  
    
    const router = useRouter()
    const imageUrl = `${image?.path}.${image?.extension}`
    const handlePageChange = () => {       
        
        router.push(`/comics/${id}`);   
     };

     const handlePageCheckout = () => {       
        
        router.push(`/checkout/${id}`);   
     };
  
    
    return (
        
    <Card  sx={{ maxWidth: 345 ,  height:300, backgroundColor:"grey"}}>
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
                    <Button onClick={handlePageCheckout}size="small" variant="contained" sx={{backgroundColor:"#ed1d24"}}> <BoltIcon  sx={{ color: "black",margin: "0 auto", fontSize: "24px"}}></BoltIcon>Compra ya!</Button>                 
                    <Button onClick={handlePageChange}size="small" variant="contained" sx={{backgroundColor:"#ed1d24"}}>Comprar</Button>                 
                    <Button onClick={handlePageChange} size="small" variant="contained"sx={{backgroundColor:"#ed1d24"}} >Ver Detalle</Button>
            </CardActions>
        </Grid>
       
    </Card>
    )
}