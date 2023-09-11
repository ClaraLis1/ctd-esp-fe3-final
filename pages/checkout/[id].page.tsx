import * as React from 'react';
import Box from '@mui/material/Box';
import * as yup from "yup";
import { NextPage, GetServerSideProps } from 'next';
import { getComic } from 'dh-marvel/services/marvel/marvel.service';
import { Comic } from 'dh-marvel/features/marvel/comic.types';
import { CardPanel } from 'dh-marvel/components/ui/cardPanel/CardPanel';
import { FormCheckout } from 'dh-marvel/components/ui/formCheckout/FormCheckout';
import { schema, schema1, schema2 } from 'dh-marvel/components/ui/formCheckout/rules';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';


interface Props {
	comic: Comic;
  id: number
}

const CheckoutPage:NextPage<Props> = ({comic, id})=>{

    
  type DataForm = yup.InferType<typeof schema>

  const methods = useForm<DataForm>({
    
    resolver: yupResolver(schema),
    
    defaultValues :{
      // customer: {
      //     name:"",
      //     lastName:'',
      //     email:''
      //   },
      // address: {
      //     address1: "",
      //     address2: "",
      //     city: "",
      //     state: "",
      //     zipCode: ""
      // },    
      // card: {
      //     number: "",
      //     cvc: "",
      //     expDate: "",
      //     nameOnCard: ""
      //     }
    },
    })
  
  
  

  return (
    <Box sx={{ mt:"20px", width: '100%' ,display:'flex', flexDirection:'column', justifyContent: "space-evenly" }}>
       <Box sx={{ mb:"20px"}}>
                    <CardPanel data={comic} />
                    </Box>
                   
      <FormProvider {...methods}>
        <FormCheckout id={id} 
        comic={comic}
       />
      </FormProvider>
     
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
