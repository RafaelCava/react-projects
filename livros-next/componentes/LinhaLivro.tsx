import { ControleEditora } from "@/classes/controle/ControleEditora";
import { Livro } from "@/classes/modelo/Livro";

const controleEditora = ControleEditora.getInstance();

export default function LinhaLivro({livro, excluir}: {livro: Livro, excluir: Function}) {
  const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);
  return (
    <tr>
      <td>
        <span className='d-block'>{livro.titulo}</span>
        <button className='btn btn-sm btn-danger' onClick={() => excluir(livro.codigo)}>Excluir</button>
      </td>
      <td className='w-50'>{livro.resumo}</td>
      <td>{nomeEditora}</td>
      <td>
        <ul>
          {
            livro?.autores?.map((autor, index) => <li key={index}>{autor}</li>)
          }
        </ul>
      </td>
    </tr>
  )
}