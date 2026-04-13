import { Injectable } from '@nestjs/common';

export interface Estilo {
  estilo: number;
  nome: string;
}

export interface Filme {
  filme: number;
  estilo: number;
  nome: string;
  ano: string;
  duracao: string;
  foto: string;
  sinopse: string;
  video: string;
}

@Injectable()
export class AppService {
  private estilos: Estilo[] = [
    { estilo: 1, nome: 'Ação' },
    { estilo: 2, nome: 'Comédia' },
  ];

  private filmes: Filme[] = [
    {
      filme: 101,
      estilo: 1,
      nome: 'Duro de Matar',
      ano: '1988',
      duracao: '132',
      foto: 'poster1.jpg',
      sinopse: 'Um policial enfrenta terroristas.',
      video: 'trailer1.mp4',
    },
  ];

  getHello(): string {
    return 'Hello World!';
  }

  createEstilo(novoEstilo: Estilo): Estilo {
    this.estilos.push(novoEstilo);
    return novoEstilo;
  }

  findAllEstilos(nome?: string): Estilo[] {
    if (!nome) {
      return this.estilos;
    }
    return this.estilos.filter((e) =>
      e.nome.toLowerCase().includes(nome.toLowerCase()),
    );
  }

  findEstiloById(id: number): Estilo | undefined {
    return this.estilos.find((e) => e.estilo === id);
  }

  updateEstilo(id: number, changes: Partial<Estilo>): Estilo | undefined {
    const index = this.estilos.findIndex((e) => e.estilo === id);
    if (index === -1) {
      return undefined;
    }
    this.estilos[index] = {
      ...this.estilos[index],
      ...changes,
    };
    return this.estilos[index];
  }

  removeEstilo(id: number): boolean {
    const originalLength = this.estilos.length;
    this.estilos = this.estilos.filter((e) => e.estilo !== id);
    return this.estilos.length < originalLength;
  }

  createFilme(novoFilme: Filme): Filme {
    this.filmes.push(novoFilme);
    return novoFilme;
  }

  findAllFilmes(nome?: string): Filme[] {
    if (!nome) {
      return this.filmes;
    }
    return this.filmes.filter((f) =>
      f.nome.toLowerCase().includes(nome.toLowerCase()),
    );
  }

  findFilmeById(id: number): Filme | undefined {
    return this.filmes.find((f) => f.filme === id);
  }

  updateFilme(id: number, changes: Partial<Filme>): Filme | undefined {
    const index = this.filmes.findIndex((f) => f.filme === id);
    if (index === -1) {
      return undefined;
    }
    this.filmes[index] = {
      ...this.filmes[index],
      ...changes,
    };
    return this.filmes[index];
  }

  removeFilme(id: number): boolean {
    const originalLength = this.filmes.length;
    this.filmes = this.filmes.filter((f) => f.filme !== id);
    return this.filmes.length < originalLength;
  }
}
