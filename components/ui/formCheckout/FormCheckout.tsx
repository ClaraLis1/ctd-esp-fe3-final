import { Button} from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import PersonalData from "./PersonalData";
import AddressData from "./AddressData";
import PaymentData from "./PaymentData";
import { FC, useState } from "react";
import { useFormContext } from "react-hook-form";


export const FormCheckout: FC = () => {
    

    const {handleSubmit} =useFormContext()
    const [formData, setFormData] = useState({});
    const [step, setStep] = useState(2);

	const onSubmit = (data: any) => {            
		
        setFormData(data)
	};

    const handlePrevStep = ()=>{
        setStep(step - 1)
    }

    const handleNextStep = ()=>{
        setStep(step + 1)
    }

    console.log(formData);
    

	return (
		<Box sx={{maxWidth: "500px"}}>
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
                    {step==1 &&<PersonalData/>}
                    {step==2 &&<AddressData/>}
                    {step==3 &&<PaymentData/>} 
                    {/* <PersonalData/>
                    <AddressData/>
                    <PaymentData/> */}
                    
                    <Box>
                        {step>1 && <Button variant="contained" color="primary"sx={{margin: 2}} onClick={handlePrevStep}>Anterior</Button>}
                        {step<3 && <Button variant="contained" color="primary"sx={{margin: 2}} onClick={handleNextStep}>Siguiente</Button>}
                        {step==3 &&  <Button type="submit" variant="contained" color="primary"sx={{margin: 2}}>
                            Enviar
                        </Button> }
                    </Box>
                </form>
            </Paper>
        </Box>
	);
};