import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { GamesService } from './games.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Game } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
@ApiTags('Games')
@Controller('games')
export class GamesController {
  constructor(private gamesService: GamesService) {}

  @UseGuards(AuthGuard())
  @Post()
  @ApiOperation({
    summary: 'Criar um jogo',
  })
  create(@Body() createGameDto: CreateGameDto): Promise<Game> {
    return this.gamesService.create(createGameDto);
  }
  @Get()
  @ApiOperation({
    summary: 'Listar todos os jogos',
  })
  findAll(): Promise<Game[]> {
    return this.gamesService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Listar um unico jogo',
  })
  findOne(@Param('id') id: string): Promise<Game> {
    return this.gamesService.findOne(id);
  }

  @UseGuards(AuthGuard())
  @Patch(':id')
  @ApiOperation({
    summary: 'Editar um jogo',
  })
  update(@Param('id') id: string, @Body() updateGameDto: UpdateGameDto) {
    return this.gamesService.update(id, updateGameDto);
  }

  @UseGuards(AuthGuard())
  @Delete(':id')
  @ApiOperation({
    summary: 'Deletar um jogo',
  })
  remove(@Param('id') id: string) {
    return this.gamesService.remove(id);
  }
}
