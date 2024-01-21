import { Editora } from '../modelo/Editora';

const editoras: Editora[] = [
  {
    codEditora: 1,
    nome: 'Alta Books'
  },
  {
    codEditora: 2,
    nome: 'Pearson'
  },
  {
    codEditora: 3,
    nome: 'Addison Wesley'
  }
]

export class ControleEditora {
  static instance: ControleEditora;
  static getInstance(): ControleEditora {
    if (!ControleEditora.instance) {
      ControleEditora.instance = new ControleEditora();
    }
    return ControleEditora.instance;
  }
  getNomeEditora(codEditora: number): string {
    let nome = editoras.find(editora => editora.codEditora === codEditora)?.nome || '';
    return nome;
  }
  getEditoras(): Editora[] {
    return editoras;
  }
}