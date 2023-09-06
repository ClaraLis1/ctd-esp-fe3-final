
// import { TeamI } from '@/interface/team'
import { NextApiRequest, NextApiResponse } from 'next'



const handler =async (req:NextApiRequest, res: NextApiResponse)=> {

  // Consultar el method de la petición si es get enviamos los datos de lo contrario enviamos un mensaje de error
  // if (req.method === "GET") {
    // const response = await res.status(200).json(faqs)
  // } else {
  //   res.status(400).json({ message: "Método no permitido" })
  // }
//   console.log("aca"+response);
   
}


export default handler