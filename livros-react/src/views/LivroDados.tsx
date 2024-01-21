import React from 'react';
import { ControleLivro } from '../controle/ControleLivros';
import { ControleEditora } from '../controle/ControleEditora';
import { useNavigate } from 'react-router-dom';

const controleLivro = ControleLivro.getInstance();
const controleEditora = ControleEditora.getInstance();

export default function LivroDados() {
  let opcoes = controleEditora.getEditoras().map(editora => {
    return {
      value: editora.codEditora,
      text: editora.nome
    }
  })
  let [titulo, setTitulo] = React.useState('');
  let [resumo, setResumo] = React.useState('');
  let [autores, setAutores] = React.useState('');
  let [codEditora, setCodEditora] = React.useState(opcoes[0].value);
  const navigate = useNavigate();
  const tratarCombo = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    let codEditora = parseInt(event.target.value);
    setCodEditora(codEditora);
  }
  const incluir = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
    controleLivro.incluir({
      titulo: titulo,
      resumo: resumo,
      autores: autores.trim().split('\n').filter(autor => !!autor),
      codEditora: codEditora,
      codigo: 0
    });
    navigate('/');
  }
  return (
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
              opcoes.map(opcao => <option key={opcao.value} value={opcao.value}>{opcao.text}</option>)
            }
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="autores">Autores (1 por linha)</label>
          <textarea className='form-control' id='autores' value={autores} onChange={event => setAutores(event.target.value)} />
        </div>
        <button className='btn btn-primary btn-md' onClick={event => incluir(event)}>Salvar Dados</button>
      </form>
    </main>
  )
}