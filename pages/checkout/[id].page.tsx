import * as React from 'react';
import Box from '@mui/material/Box';
import * as yup from "yup";
import { NextPage, GetServerSideProps } from 'next';
import { getComic } from 'dh-marvel/services/marvel/marvel.service';
import {  ComicData } from 'dh-marvel/features/marvel/comic.types';
import { CardPanel } from 'dh-marvel/components/ui/cardPanel/CardPanel';
import { FormCheckout } from 'dh-marvel/components/ui/formCheckout/FormCheckout';
import { schema, schema1, schema2 } from 'dh-marvel/components/ui/formCheckout/rules';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { Typography } from '@mui/material';
import LayoutGeneral from 'dh-marvel/components/layouts/layout-general';
import LayoutCheckout from 'dh-marvel/components/layouts/layout-checkout';


interface Props {
	comic: ComicData;
  id: number
}

const CheckoutPage:NextPage<Props> = ({comic, id})=>{
  const router = useRouter();
   
  type DataForm = yup.InferType<typeof schema>

  const methods = useForm<DataForm>({    
    resolver: yupResolver(schema),    
    defaultValues :{
    },
    })      
       

  return (
   
   
   <Box sx={{ mt:"20px", width: '100%' ,display:'flex', flexDirection:'column', justifyContent: "space-evenly" }}>
       <Box sx={{ mb:"20px"}}>
         <CardPanel data={comic} />
      </Box>
      {comic.stock !==0 ?<>

      <FormProvider {...methods}>
        <FormCheckout id={id} 
        comic={comic}
       />
      </FormProvider>
      </>:
        <>
        <Box sx={{margin:'0 auto'}}>
          <Typography >
            Lo sentimos, no hay stock disponible por el momento...
          </Typography>
        </Box>
        </>
      }             
     
     </Box>
   
  );
}



export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = Number(context.params?.id)
  const data = await getComic(id);
  return {
   props:{
    comic:data,
    id: id
    
   }
  };
};


export default CheckoutPage
