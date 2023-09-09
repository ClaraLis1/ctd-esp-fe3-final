import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import * as yup from "yup";
import { NextPage, GetServerSideProps } from 'next';
import { getComic, getComics } from 'dh-marvel/services/marvel/marvel.service';
import { Comic } from 'dh-marvel/features/marvel/comic.types';
import { CardPanel } from 'dh-marvel/components/ui/cardPanel/CardPanel';
import { FormCheckout } from 'dh-marvel/components/ui/formCheckout/FormCheckout';
import { schema } from 'dh-marvel/components/ui/formCheckout/rules';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';

const steps = [
  'Datos Personales',
  'Dirección de entrega',
  'Datos del pago',
];

interface Props {
	comic: Comic;
}

const CheckoutPage:NextPage<Props> = ({comic})=>{
    
  type DataForm = yup.InferType<typeof schema>

  const methods = useForm<DataForm>({
    resolver: yupResolver(schema),
    defaultValues:{}
    })
  const [formStep, setFormStep] = React.useState(2);
    
   /* const formStepToLast = () => {
      setFormStep(2);
    };*/
  

  return (
    <Box sx={{ mt:"20px", width: '100%' ,display:'flex', flexDirection:'column', justifyContent: "space-evenly" }}>
      <Box sx={{ mb:"20px"}}>
      {/* <CardPanel data={comic} />
      </Box>
      <Box>
      <Stepper activeStep={3} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>

          </Step>
        ))}
      </Stepper> */}
      <FormProvider {...methods}>
        <FormCheckout/>
      </FormProvider>
     
     </Box>
    </Box>
  );
}


export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = Number(context.params?.id)
  const data = await getComic(id);
  return {
   props:{
    comic:data,
    
   }
  };
};


export default CheckoutPage
