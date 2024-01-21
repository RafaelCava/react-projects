import { NextApiRequest, NextApiResponse } from "next";
import { ControleLivro } from '../../../classes/controle/ControleLivros';

export const controleLivro = ControleLivro.getInstance()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req
  if(!['GET', 'POST'].includes(method as string)) {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    if('GET' === method) {
      const livros = controleLivro.obterLivros()
      return res.status(200).json(livros)
    } else {
      const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body 
      controleLivro.incluir({
        autores: body.autores,
        codEditora: body.codEditora,
        codigo: 0,
        resumo: body.resumo,
        titulo: body.titulo
      })
      return res.status(200).json({ message: 'Livro incluído com sucesso'})
    }
  } catch (error: any) {
    return res.status(500).json({ message: error?.message })  
  }
}