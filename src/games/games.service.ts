import {
  Injectable,
  UnauthorizedException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Game } from '@prisma/client';
@Injectable()
export class GamesService {
  constructor(private database: PrismaService) {}
  async create(data: CreateGameDto): Promise<Game> {
    const NameExistent = await this.database.game.findUnique({
      where: { name: data.name },
    });
    if (NameExistent) {
      throw new UnauthorizedException('Jogo ja existente');
    } else {
      const game = await this.database.game.create({
        data,
      });
      return game;
    }
  }

  async findAll(): Promise<Game[]> {
    const Games = await this.database.game.findMany();
    return Games;
  }

  async findOne(id: string): Promise<Game> {
    const GAME = await this.database.game.findUnique({
      where: { id },
    });

    if (!GAME) {
      throw new NotFoundException('Erro Jogo nao encontrado');
    }

    return GAME;
  }

  update(id: number, updateGameDto: UpdateGameDto) {
    return `This action updates a #${id} game`;
  }

  remove(id: number) {
    return `This action removes a #${id} game`;
  }
}
