import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button'
import FormCheckout from 'dh-marvel/components/ui/formCheckout/FormCheckout';
import {useRef} from 'react'
import { useRouter } from 'next/router';
import { GetStaticProps, NextPage, GetStaticPaths } from 'next';
import { getComic, getComics } from 'dh-marvel/services/marvel/marvel.service';
import { Comic } from 'dh-marvel/features/marvel/comic.types';
import { CardDetail } from 'dh-marvel/components/ui/cardDetail/CardDetail';
import { CardPanel } from 'dh-marvel/components/ui/cardPanel/CardPanel';

const steps = [
  'Datos Personales',
  'Dirección de entrega',
  'Datos del pago',
];

interface Props {
	comic: Comic;
}

const CheckoutPage:NextPage<Props> = ({comic})=>{
    const router = useRouter();
    const [formStep, setFormStep] = React.useState(1);
    const formRef = useRef<HTMLFormElement | null>(null);
   
  
    /*useEffect(() => { router.push(`/?step=${formStep}`), setFormStep(formStep) }, [formStep]);*/
    
    const nextFormStep = () => {
        // if (formRef.current !== null) {
        //     formRef.current.submit();
        //   }
          setFormStep((formStep) => formStep + 1);
      
    };
  
  
    const prevFormStep = () => {
      setFormStep((formStep) => formStep - 1);
      
    };
  
   /* const formStepToLast = () => {
      setFormStep(2);
    };*/
  

  return (
    <Box sx={{ mt:"20px", width: '100%' ,display:'flex', flexDirection:'column', justifyContent: "space-evenly" }}>
      <Box sx={{ mb:"20px"}}>
      <CardPanel data={comic} />
      </Box>
      <Box>
      <Stepper activeStep={3} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>

          </Step>
        ))}
      </Stepper>
      <FormCheckout 
            step={formStep}
            // ref={formRef} 
            ></FormCheckout>
      <Box sx={{display:'flex', flexDirection:'row', justifyContent: "space-evenly"}}>
        <Button size="small" variant="contained" onClick={prevFormStep} disabled={formStep==1}  >anterior </Button>
        <Button size="small" variant="contained" onClick={nextFormStep} disabled={formStep==3} >siguiente </Button>
      </Box>
    </Box>
    </Box>
  );
}

// import Head from "next/head";
// import { number } from 'yup';
/*
const stepper = ()=>{

    const router = useRouter();
  const [formStep, setFormStep] = useState(0);
  const { setFormValues } = useContext(FormContext);

  useEffect(() => { router.push(`/?step=${formStep}`), setFormStep(formStep) }, [formStep]);
  
  const nextFormStep = (contract='') => {
    setFormStep(1);
    setFormValues({ contract });
  };


  const prevFormStep = () => {
    setFormStep((formStep) => formStep - 1);
    
  };

  const formStepToLast = () => {
    setFormStep(2);
  };

  return (
    <div>
      <Head>
        <title>Next.js Multi Step Form</title>
      </Head>
     
        <div className={styles.container}>
            {formStep >= 0 && (
              <ContractInfo
                formStep={formStep}
                prevFormStep={prevFormStep}
                nextFormStep={nextFormStep}
              />
            )}
            {formStep >= 1 && (
              <PersonalInfo
                formStep={formStep}
                prevFormStep={prevFormStep}
                formStepToLast={formStepToLast}
              />
            )}
            {formStep >= 2 && (
              <ConfirmPurchase
                formStep={formStep}
                prevFormStep={prevFormStep}
                nextFormStep={nextFormStep}
              />
            )}  
        </div>
    </div>
  );
    
}
*/

export const getStaticPaths:GetStaticPaths = async () => {
	const res = await getComics()
    const comics = res?.data?.results || [];
     const paths = comics.map((comic:any) => ({
     params: { id: comic.id.toString() },
      }))      
  return { paths, fallback: false }
}


export const getStaticProps: GetStaticProps = async ({ params }) => {	
	const id= params?.id;
	try {
		const res = await getComic(`${id}`)      
		
		return {
			props: {
				comic:res,
			},
		};
	} catch (error) {
		console.error('No se pudo obtener el personaje', error);
		return {
			props: {
				comic: {},
			}
		}
	}
	
};
export default CheckoutPage
