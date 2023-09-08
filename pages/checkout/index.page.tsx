import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button'
import FormCheckout from 'dh-marvel/components/ui/formCheckout/FormCheckout';
import { useRouter } from 'next/router';

const steps = [
  'Datos Personales',
  'Dirección de entrega',
  'Datos del pago',
];

export default function HorizontalLinearAlternativeLabelStepper() {
    const router = useRouter();
    const [formStep, setFormStep] = React.useState(3);
   
  
    /*useEffect(() => { router.push(`/?step=${formStep}`), setFormStep(formStep) }, [formStep]);*/
    
    const nextFormStep = () => {
      setFormStep((formStep) => formStep + 1);
      
    };
  
  
    const prevFormStep = () => {
      setFormStep((formStep) => formStep - 1);
      
    };
  
   /* const formStepToLast = () => {
      setFormStep(2);
    };*/
  

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={3} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>

          </Step>
        ))}
      </Stepper>
      <FormCheckout step={formStep}></FormCheckout>
      <Box sx={{display:'flex', flexDirection:'row', justifyContent: "space-evenly"}}>
        <Button size="small" variant="contained" onClick={prevFormStep} disabled={formStep==1}  >anterior </Button>
        <Button size="small" variant="contained" onClick={nextFormStep} disabled={formStep==3} >siguiente </Button>
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

export default stepper
*/