import type {NextPage} from 'next'
import { FaqsType } from 'dh-marvel/components/faqs/faqsData';
import { Accordion, AccordionSummary } from '@mui/material';
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';

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
      <>
          <div style={{ width: '80%' ,  marginTop: '20px'}} >
          {faqs?.map((faq) =>(
            <Accordion key={faq.id} sx={{ margin:'0 auto'}} expanded={expanded === faq.id} onChange={handleChange(faq.id)}>
                <AccordionSummary
                sx={{ margin:'0 auto'}}
                  expandIcon={<ExpandMoreIcon/>}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"            >
              
              <Typography sx={{ color: 'text.secondary' , margin:'0 auto'}}>{faq.question}</Typography>
            </AccordionSummary >
            <AccordionDetails  sx={{ margin:'0 auto'}}>
              <Typography >
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>         
          
          ))}
          </div>   
            
      </>
            
     
    
        
    )
}

export default Index

export const getStaticProps = async () => {  
//   const response = await fetch(`
const response = await fetch( 
     "https://ctd-esp-fe3-final-claralisle.vercel.app/api/faqs"    
  )  
  
  const faqs = await response.json()
  return {
    props: {
      faqs
    }
  }
}

