import type {NextPage} from 'next'
import Head from 'next/head'
import BodySingle from "dh-marvel/components/layouts/body/single/body-single";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { CardComic } from 'dh-marvel/components/ui/card/CardComic';
import { getComics } from 'dh-marvel/services/marvel/marvel.service';
import { Comic } from 'dh-marvel/features/marvel/comic.types';

interface Props{
   data: []
}

const Index: NextPage<Props> = ({data}) => {
    console.log(data);    
    
    return (
        <>      

            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <BodySingle title={"Sample"}>
            <Box sx={{ flexGrow: 1 }}>
             <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
    
                {data.map((comic:any)=>(
                     <Grid item xs={2} sm={4} md={4} key={comic.id}>
                        <CardComic key={comic.id}
                        // image={comic.image[0]}
                        // name ={comic.title}
                        />

                        
                    </Grid>
                ))}
                 </Grid>
            </Box>
            </BodySingle>
      
        </>
    )
}

export default Index


export const getServerSideProps = async () => { 
    const data = await getComics(5,12)    
    const info = data.data.results   

    return {
         props: { data:info }
     }
}