/*import type {NextPage} from 'next'
import Head from 'next/head'
import BodySingle from "dh-marvel/components/layouts/body/single/body-single";
import LayoutGeneral from 'dh-marvel/components/layouts/layout-general';
import { FaqsType } from 'dh-marvel/components/faqs/faqsData';


interface Props{
       faqs: FaqsType[]
    }

const Index: NextPage<Props> = ({faqs}) => {    
        console.log("hola"+faqs);
        
    return (
        <>
            <h1>hola</h1>    
            
        </>
    )
}

export default Index

/*export const getStaticProps = async () => {  
//   const response = await fetch(`
const response = await fetch(
    //  "http://localhost:3000/api/faqs"
     "https://ctd-esp-fe3-final-claralisle.vercel.app/api/faqs"
    //  "https://ctd-esp-fe3-final-swart.vercel.app/api/faqs"
  )  
  
  const faqs = await response.json()

  return {
    props: {
      faqs
    }
  }
}*/