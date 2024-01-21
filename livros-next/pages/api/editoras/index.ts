import { NextApiRequest, NextApiResponse } from 'next';
import { ControleEditora } from '../../../classes/controle/ControleEditora';

export const controleEditora = ControleEditora.getInstance();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if(req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }
  try {
    const editoras = controleEditora.getEditoras();
    return res.status(200).json(editoras);
  } catch (error: any) {
    return res.status(500).json({ message: error?.message });
  }
}
