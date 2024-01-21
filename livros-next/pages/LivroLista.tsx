/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import LinhaLivro from '../componentes/LinhaLivro';
import { Livro } from '@/classes/modelo/Livro';
import Head from 'next/head';
import TopBar from '@/componentes/TopBar';


export default function LivroLista({ livrosProps }: { livrosProps: Livro[]}) {
  let [livros, setLivros] = React.useState<Livro[]>(livrosProps);
  useEffect(() => {
    setLivros(livrosProps);
  }, []);

  const excluirLivro = async (codigo: number) => {
    await fetch(`http://localhost:3000/api/livros/${codigo}`, {
      method: 'DELETE'
    }).catch(error => console.log(error));
    setLivros(prevLivros => prevLivros?.filter(livro => livro.codigo !== codigo));
  }
  return (
    <>
    <Head>
      <title>Livro Lista</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <TopBar />
    <div className='container'>
      <h1 className='text-left'>Catálogo de Livros</h1>
      <table className='table text-left'>
        <thead className='thead-dark bg-dark'>
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
    </>
  );
}

export async function getServerSideProps() {
  try {
    const response = await fetch('http://localhost:3000/api/livros');
    const livros: Livro[] = await response.json();
    return {
      props: {
        livrosProps: livros
      }
    }
  } catch (error) {
    return {
      props: {
        livrosProps: []
      }
    }
  }
}