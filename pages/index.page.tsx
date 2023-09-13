import type { GetServerSideProps, NextPage} from 'next'
import Head from 'next/head'
import BodySingle from "dh-marvel/components/layouts/body/single/body-single";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { CardComic } from 'dh-marvel/components/ui/card/CardComic';
import { getComics } from 'dh-marvel/services/marvel/marvel.service';
import Pagination from '@mui/material/Pagination';
import { useRouter } from 'next/router';
import React, { ChangeEvent, useState } from 'react';
import { Comics } from 'dh-marvel/features/marvel/comic.types';



const INITIAL_LIMIT :number = 12

interface Props {
   initialComics: Comics[]
   total: number
   page: number
}
const Index: NextPage<Props> = ({ initialComics, total , page}) => {
    const [currentPage, setCurrentPage] = useState(page);
    const limit = 12
    const router = useRouter(); 
    
    const handlePageChange = (event: ChangeEvent<unknown>, value: number) => {   
        setCurrentPage(value)     
        router.push(`/?page=${value}`);
    };
 
    return (
      <>
        <Head>
          <title>Inicio | DH MARVEL</title>
          <meta name="description" content="Marvel Store Sitio Web" />
        </Head>
       
          <BodySingle title={"Bienvenido a DH-Marvel Store"}>

          {/* <Pagination count={Math.ceil(total / LIMIT)}  /> */}
          <Pagination count={Math.ceil(total / limit)} onChange={handlePageChange} sx={{ margin:"0 auto"}} />

          <Box sx={{ flexGrow: 1 }}>              
         
                 <Grid sx={{margin: 5}} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }}>
                    {initialComics.map((comic:any)=>(
                                           
                        <Grid item xs={2} sm={4} md={4} key={comic.id}>
                            <CardComic key={comic.id}
                                id={comic.id}
                                title={comic.title}                                 
                                image = {comic.images[0]?comic.images[0]:comic.thumbnail}                  
                                
                            ></CardComic>                          
                        </Grid>
                    ))}
                </Grid>
           </Box>
          </BodySingle>
       
      </>
    )
  }
  
  export default Index


  export const getServerSideProps: GetServerSideProps = async ({
    query    
  }:any) => { 
    const currentPage = query.page?? 1
    const offset =  (currentPage - 1) * 12   
    const res = await getComics(offset, INITIAL_LIMIT)    
    const initialComics = res?.data?.results || [];   
    const total = res?.data?.total ?? null;

    return {
         props: {             
            initialComics,                
            total ,
            page: offset             
         }
     }
}
