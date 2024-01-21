import { NextApiRequest, NextApiResponse } from 'next';
import { controleEditora } from '.';
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  if(req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }
  try {
    const codEditora = Number(req.query.codEditora)
    const editora = controleEditora.getNomeEditora(codEditora);
    return res.status(200).json({ nome: editora });
  } catch (error: any) {
    return res.status(500).json({ message: error?.message });
  }
 }