import React, { useEffect } from 'react';
import { ControleLivro } from '../controle/ControleLivros';
import { Livro } from '../modelo/Livro';
import LinhaLivro from '../componentes/LinhaLivro';

const controleLivro = ControleLivro.getInstance();

export default function LivroLista() {
  let [livros, setLivros] = React.useState<Livro[]>();
  useEffect(() => {
    setLivros(controleLivro.obterLivros());
  }, []);

  const excluirLivro = (codigo: number) => {
    controleLivro.excluir(codigo);
    setLivros(prevLivros => prevLivros?.filter(livro => livro.codigo !== codigo));
  }
  return (
    <div className='container'>
      <h1 className='text-left'>Catálogo de Livros</h1>
      <table className='table text-left'>
        <thead className='thead-dark'>
          <tr>
            <th className='font-weight-normal' scope='col'>Título</th>
            <th className='font-weight-normal' scope='col'>Resumo</th>
            <th className='font-weight-normal' scope='col'>Editora</th>
            <th className='font-weight-normal' scope='col'>Autores</th>
          </tr>
        </thead>
        <tbody>
          {
            livros?.map((livro, index) => <LinhaLivro key={index} livro={livro} excluir={excluirLivro} />)
          }
        </tbody>
      </table>
    </div>
  );
}