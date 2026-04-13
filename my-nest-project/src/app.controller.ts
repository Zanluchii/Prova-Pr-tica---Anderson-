import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';
import type { Estilo, Filme } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('estilos')
  @HttpCode(201)
  createEstilo(@Body() novoEstilo: Estilo) {
    return {
      message: 'Estilo cadastrado!',
      data: this.appService.createEstilo(novoEstilo),
    };
  }

  @Get('estilos')
  findAllEstilos(@Query('nome') nome?: string) {
    return this.appService.findAllEstilos(nome);
  }

  @Get('estilos/:id')
  findEstiloById(@Param('id') id: string) {
    const estilo = this.appService.findEstiloById(Number(id));
    if (!estilo) {
      throw new NotFoundException('Estilo não encontrado.');
    }
    return estilo;
  }

  @Put('estilos/:id')
  updateEstilo(@Param('id') id: string, @Body() changes: Partial<Estilo>) {
    const estilo = this.appService.updateEstilo(Number(id), changes);
    if (!estilo) {
      throw new NotFoundException('Estilo não encontrado.');
    }
    return { message: 'Estilo atualizado com sucesso!', data: estilo };
  }

  @Delete('estilos/:id')
  removeEstilo(@Param('id') id: string) {
    const removed = this.appService.removeEstilo(Number(id));
    if (!removed) {
      throw new NotFoundException('Estilo não encontrado.');
    }
    return { message: 'Estilo removido com sucesso.' };
  }

  @Post('filmes')
  @HttpCode(201)
  createFilme(@Body() novoFilme: Filme) {
    return {
      message: 'Filme inserido com sucesso!',
      data: this.appService.createFilme(novoFilme),
    };
  }

  @Get('filmes')
  findAllFilmes(@Query('nome') nome?: string) {
    return this.appService.findAllFilmes(nome);
  }

  @Get('filmes/:id')
  findFilmeById(@Param('id') id: string) {
    const filme = this.appService.findFilmeById(Number(id));
    if (!filme) {
      throw new NotFoundException('Filme não encontrado.');
    }
    return filme;
  }

  @Put('filmes/:id')
  updateFilme(@Param('id') id: string, @Body() changes: Partial<Filme>) {
    const filme = this.appService.updateFilme(Number(id), changes);
    if (!filme) {
      throw new NotFoundException('Filme não encontrado.');
    }
    return { message: 'Filme alterado!', data: filme };
  }

  @Delete('filmes/:id')
  removeFilme(@Param('id') id: string) {
    const removed = this.appService.removeFilme(Number(id));
    if (!removed) {
      throw new NotFoundException('Filme não encontrado para remoção.');
    }
    return { message: 'Filme removido com sucesso.' };
  }
}
