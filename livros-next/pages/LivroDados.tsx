import { Editora } from '@/classes/modelo/Editora';
import TopBar from '@/componentes/TopBar';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

export default function LivroDados({ opcoes }: any) {
  let [titulo, setTitulo] = React.useState('');
  let [resumo, setResumo] = React.useState('');
  let [autores, setAutores] = React.useState('');
  let [codEditora, setCodEditora] = React.useState(opcoes[0].value);
  const router = useRouter()
  const tratarCombo = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    let codEditora = parseInt(event.target.value);
    setCodEditora(codEditora);
  }
  const incluir = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
    await fetch('http://localhost:3000/api/livros', {
      method: 'POST',
      body: JSON.stringify({
        titulo: titulo,
        resumo: resumo,
        autores: autores.trim().split('\n').filter(autor => !!autor),
        codEditora: codEditora,
        codigo: 0
      })
    }).catch(error => console.log(error));
    router.push('/LivroLista');
  }
  return (
    <>
      <Head>
        <title>Cadastro</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopBar />
      <main className='container text-left'>
        <h1>Dados do Livro</h1>
        <form onSubmit={event => event.preventDefault()}>
          <div className="form-group">
            <label htmlFor="titulo">Título</label>
            <input type="text" className="form-control" id="titulo" value={titulo} onChange={event => setTitulo(event.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="resumo">Resumo</label>
            <textarea className='form-control' maxLength={100} id='resumo' value={resumo} onChange={event => setResumo(event.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="editora">Editora</label>
            <select className='form-control' id="editora" value={codEditora} onChange={event => tratarCombo(event)}>
              {
                opcoes.map((opcao: any) => <option key={opcao.value} value={opcao.value}>{opcao.text}</option>)
              }
            </select>
          </div>
          <div className="form-group mb-2">
            <label htmlFor="autores">Autores (1 por linha)</label>
            <textarea className='form-control' id='autores' value={autores} onChange={event => setAutores(event.target.value)} />
          </div>
          <button className='btn btn-primary btn-md' onClick={event => incluir(event)}>Salvar Dados</button>
        </form>
      </main>
    </>

  )
}

export async function getServerSideProps() {
  try {
    const response = await fetch('http://localhost:3000/api/editoras')
    const editoras: Editora[] = await response.json();
    let opcoes = editoras.map(editora => {
      return {
        value: editora.codEditora,
        text: editora.nome
      }
    })
    return {
      props: {
        opcoes
      }
    }
  } catch (error) {
    return {
      props: {
        opcoes: []
      }
    }
  }
}