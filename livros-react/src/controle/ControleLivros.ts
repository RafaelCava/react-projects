import { Livro } from '../modelo/Livro';

export class ControleLivro {
  private livros: Livro[]
  constructor() {
    this.livros = [
      {
        codigo: 1,
        titulo: 'Use a Cabeça: Java',
        codEditora: 1,
        resumo: 'Use a Cabeça! Java é uma experiência completa de aprendizado em programação orientada a objetos (OO) e Java.',
        autores: ['Bert Bates', 'Kathy Sierra']
      },
      {
        codigo: 2,
        titulo: 'Java, como Programar',
        codEditora: 2,
        resumo: 'Milhões de alunos e profissionais aprenderam programação e desenvolvimento de software com os livros Deitel',
        autores: ['Paul Deitel', 'Harvey Deitel']
      },
      {
        codigo: 3,
        titulo: 'Core Java for the Impatient',
        codEditora: 3,
        resumo: 'eaders familiar with Horstmann\'s original, two-volume "Core Java" books who are looking for a comprehensive, but condensed guide to all of the new features and functions of Java SE 9 will learn how these new features impact the language and core libraries.',
        autores: ['Cay Horstmann']
      }
    ];
  }
  static instance: ControleLivro;
  static getInstance(): ControleLivro {
    if (!ControleLivro.instance) {
      ControleLivro.instance = new ControleLivro();
    }
    return ControleLivro.instance
  }
  obterLivros(): Livro[] {
    return this.livros;
  }
  incluir(livro: Livro): void {
    const lastCode = this.livros.at(-1)?.codigo || 0
    livro.codigo = lastCode + 1;
    this.livros.push(livro);
  }
  excluir(codigo: number): void {
    const index = this.livros.findIndex(livro => livro.codigo === codigo);
    if (index >= 0) {
      this.livros.splice(index, 1);
    }
  }
}