import { Button, Step, StepLabel, Stepper} from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import PersonalData from "./PersonalData";
import AddressData from "./AddressData";
import PaymentData from "./PaymentData";
import { FC, useState } from "react";
import * as yup from "yup";
import { useForm, useFormContext } from "react-hook-form";
import { CardPanel } from "../cardPanel/CardPanel";
import { Comic } from "dh-marvel/features/marvel/comic.types";
import { useRouter } from "next/router";


const defaultValues ={
    customer: {
        name:"",
        lastName:'',
        email:''
    },
    address: {
        address1: "",
        address2: "",
        city: "",
        state: "",
        zipCode: "",
    },    
    card: {
        number: "",
        cvc: "",
        expDate: "",
        nameOnCard: ""
    }
}

const steps = [
    'Datos Personales',
    'Dirección de entrega',
    'Datos del pago',
  ];

  interface Props{
    id:number
    comic: Comic 
  }
  

export const FormCheckout: FC<Props> = ({id, comic}) => {  


    const router = useRouter()  
    const {handleSubmit} =useFormContext()
    const [formData, setFormData] = useState({});
    const [step, setStep] = useState<number>(1);
    const [status, setStatus] = useState<number>();
    console.log(formData);
    
  
   
	const onSubmit1 = (data: any) => {               
		setFormData({...formData, customer: data})
	};

    const onSubmit = (data: any) => {
        console.log(data);
        
        if(step == 1){
            setFormData({...formData, customer: data})
            // setStep(step + 1 )
        }
        if(step == 2){
            setFormData({...formData, address: data})
            // setStep(step + 1 )
        }        
        if(step == 3){
            setFormData({...formData, card: data})   
            validateData()
            // const usuarioJSON = JSON.stringify(data);
            // localStorage.setItem("usuario", usuarioJSON);
            // router.push(`/confirmacion-compra/${id}`)       
        }
        
    };

    const validateData= ()=>{
        fetch('https://ctd-esp-fe3-final-claralisle.vercel.app/api/checkout')
        .then((response) => {
          setStatus(response.status);
          return response.json();
        })
        .then((data) => {
          // data contiene la respuesta de la API en formato JSON
          // Puedes trabajar con los datos aquí según tus necesidades
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
    

  
    const handlePrevStep = ()=>{        
        setStep(step - 1)
    }

    const handleNextStep = ()=>{    
        setStep(step + 1)
    }


    

	return (
        <>
           <Box >
                <Stepper activeStep={step} alternativeLabel>
                        {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                        ))}
               </Stepper>
            </Box>
            <Box sx={{maxWidth: "500px", margin: "0 auto"}}>
                <Paper
                    elevation={1}
                    sx={{p: "32px", display: "flex", flexDirection: "column", gap: 3}}
                >
                    {step==1 &&<Typography variant="h4" align="center">
                        Datos personales
                    </Typography>}
                    {step==2 && <Typography variant="h4" align="center">
                        Dirección de envio
                    </Typography>}
                    {step==3 && <Typography variant="h4" align="center">
                        Pago
                    </Typography>}                

                  <form onSubmit={handleSubmit(onSubmit)}>                        
                        {step==1 &&<PersonalData />}
                        {step==2 &&<AddressData/>}
                        {step==3 &&<PaymentData/>}  
                        
                        <Box>
                            {step>1 && <Button  variant="contained" color="primary"sx={{margin: 2}} onClick={handlePrevStep}>Anterior</Button>}
                            {step<3 && <Button  type="submit" variant="contained" color="primary"sx={{margin: 2}} onClick={handleNextStep}>Siguiente</Button>}
                            {/* {step==1 &&  <Button type="submit" variant="contained" color="primary"sx={{margin: 2}}>
                            siguiente
                            </Button> } */}
                            {step==3 &&  <Button type="submit" variant="contained" color="primary"sx={{margin: 2}}>
                                Enviar
                            </Button> }
                        </Box>
                    </form>
                </Paper>
            </Box>
        </>
	);
};