import { FC } from "react"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useRouter } from "next/router";
import { Accordion, AccordionSummary, Container, Stack } from '@mui/material';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NextLink from 'next/link'
import { ComicData } from "dh-marvel/features/marvel/comic.types";


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
    data:ComicData
}
export const CardDetail: FC<Props> = ({data}) => {
    const image = data.images[0]      
     const imageUrl = `${image?.path}.${image?.extension}`
     const router = useRouter()
     const [expanded, setExpanded] = React.useState<number | false>(false);
     
     
     const handleComprar = () => {       
                router.push(`/checkout/${data.id}`);   
     };

  const handleChange =
    (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };         
    
    return (   
       
        <Stack  direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
           
        >
            
        <Card sx={{ width: "60%", margin:"0 auto" , backgroundColor:"grey"}} >
            <CardMedia
                component="img"
                alt='imagen de Marvel'
                height="250"
                // image={data.images[0]?`{${data.images[0].path}.${data.images[0].extension}}`:`${data.thumbnail.path}.${data.thumbnail.extension}`}
                image={`${data.thumbnail.path}.${data.thumbnail.extension}`}
                // image={imageUrl? imageUrl: ""}
                />
            <CardContent sx={{width:"100%"}}>
                <Typography variant="body2" color="text.secondary">
                    Comic: {data.title}
                </Typography>          
                <Typography variant="body2" color="blue">
                {`Precio  $${data.price}`}
                </Typography>
                <Typography sx={{ textDecoration: 'line-through' }} variant="body2" color="red" >
                {`Precio Anterior $${data.oldPrice}`}
                </Typography>
                <Accordion key='characters'  expanded={expanded === 1} onChange={handleChange(1)}>
                    <AccordionSummary                
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    >              
                    <Typography sx={{ color: 'text.secondary' , margin:'0 auto'}}>Protagonistas</Typography>
                    </AccordionSummary >
                    <AccordionDetails  >
                        {data.characters.items?.map((character:any) =>(

                            <Typography key={character.name}>
                            <NextLink href={`/personajes/${character.resourceURI.replace(/^.+\/characters\//, '')}`} passHref> 
                                {character.name}
                                </NextLink>  
                            </Typography>
                    ))}
                    </AccordionDetails>
                </Accordion>  
                <Accordion key='description'expanded={expanded === 2} onChange={handleChange(2)}>
                    <AccordionSummary                
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    >              
                    <Typography sx={{ color: 'text.secondary' , margin:'0 auto'}}>Descripción</Typography>
                    </AccordionSummary >  
                    <AccordionDetails  >       

                    <Typography variant="body2" color="text.secondary">
                        {data.textObjects[0]?.text ? data.textObjects[0].text : "Sin información"}
                    </Typography>                
                    </AccordionDetails>
                </Accordion>  
                <CardActions sx={{display: "flex", justifyContent:"flex-end"}}>
                    <Button onClick={handleComprar} size="small" variant="contained"  disabled={data.stock == 0}>{data.stock==0? "Sin Stock": "Comprar"} </Button>
                </CardActions>
            </CardContent>       
        </Card>
        </Stack>
    
    )
}