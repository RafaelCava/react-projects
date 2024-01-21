import { NextApiRequest, NextApiResponse } from "next";
import {controleLivro} from '.'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { codigo } = req.query
    const { method } = req
    if('DELETE' !== method as string) {
      return res.status(405).json({ message: 'Method not allowed' });
    }
    if(!codigo || isNaN(Number(codigo))) {
      return res.status(500).json({ message: 'Código inválido' });
    }
    controleLivro.excluir(Number(codigo))
    return res.status(200).json({ message: 'Livro excluído com sucesso'})
  } catch (error: any) {
    return res.status(500).json({ message: error?.message }); 
  }
}