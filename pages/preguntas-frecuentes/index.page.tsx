import type {NextPage} from 'next'
import { FaqsType } from 'dh-marvel/components/faqs/faqsData';
import { Accordion, AccordionSummary } from '@mui/material';
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import BodySingle from 'dh-marvel/components/layouts/body/single/body-single';

interface Props{
       faqs: FaqsType[]
    }

const Index: NextPage<Props> = ({faqs}) => {  
  const [expanded, setExpanded] = React.useState<number | false>(false);
  const handleChange =
    (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };         
      
        
    return (      
      <BodySingle title={"Preguntas Frecuentes"}>
          <div style={{ marginTop: '20px'}} >
            {faqs?.map((faq) =>(
              <Accordion key={faq.id}  expanded={expanded === faq.id} onChange={handleChange(faq.id)}>
                <AccordionSummary                
                  expandIcon={<ExpandMoreIcon/>}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                  >              
                <Typography sx={{ color: 'text.secondary' , margin:'0 auto'}}>{faq.question}</Typography>
                </AccordionSummary >
                <AccordionDetails  >
                  <Typography >
                    {faq.answer}
                  </Typography>
               </AccordionDetails>
             </Accordion>    
           ))}
          </div>             
      </BodySingle>   
  )
}

export default Index

 export const getStaticProps = async () => {  
   const response = await fetch(      
      //"http://localhost:3000/api/faqs"
      'https://ctd-esp-fe3-final-claralisle.vercel.app/api/faqs'
 
     )  
     const faqs = await response.json()
     return {
       props: {
         faqs
       }
     }
 }


