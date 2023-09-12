import { FC } from "react"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useRouter } from "next/router";
import { CharacterDataResult } from "dh-marvel/features/marvel/character.types";

interface Props{
    data: CharacterDataResult
}
export const CardCharacter: FC<Props> = ({data}) => {
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
            image={`${data.thumbnail.path}.${data.thumbnail.extension}`}
            // image={""}
            />
        <CardContent sx={{width:"100%"}}>
            <Typography variant="body2" color="text.secondary">
                Comic: {data?.name}
            </Typography>  
            <Typography variant="body2" color="text.secondary">
                Descipcion: {data?.description? data.description : "Sin información"}
            </Typography>         
                       
            <CardActions sx={{display: "flex", justifyContent:"flex-end"}}>
                <Button onClick={handelVolver} size="small" variant="contained" >Volver </Button>
            </CardActions>
        </CardContent>
        
    </Card>
    )
}