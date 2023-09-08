import { FC } from "react"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useRouter } from "next/router";
import { Accordion, AccordionSummary } from '@mui/material';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NextLink from 'next/link'


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
export const CardCharacter: FC<Props> = ({data}) => {
    //  const image = data.images[0]   
    //  const imageUrl = `${image?.path}.${image?.extension}`
     const router = useRouter()     
     
     const handelVolver = () => {       
                router.push('/');   
     };

 
    return (        
    <Card sx={{ width: "70%", margin:"0 auto" , backgroundColor:"grey", display: "flex", flexDirection: "row" }}>
        <CardMedia
            component="img"
            alt='imagen de Marvel'
            height="250"
            // image={imageUrl? imageUrl: ""}
            image={""}
            />
        <CardContent sx={{width:"100%"}}>
            <Typography variant="body2" color="text.secondary">
                Comic: {data.name}
            </Typography>  
            <Typography variant="body2" color="text.secondary">
                Descipcion: {data.description? data.description : "Sin información"}
            </Typography>         
                       
            <CardActions sx={{display: "flex", justifyContent:"flex-end"}}>
                <Button onClick={handelVolver} size="small" variant="contained"  disabled={data.stock == 0}>Volver </Button>
            </CardActions>
        </CardContent>
        
    </Card>
    )
}