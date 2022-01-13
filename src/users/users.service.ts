import {
  Injectable,
  ConflictException,
  UnauthorizedException,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma.service';
import { User, Game } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private database: PrismaService) {}
  async create(dado: CreateUserDto): Promise<User> {
    if (dado.password !== dado.confirmpassword) {
      throw new UnauthorizedException('Senha de confirmacao esta incorreta');
    }
    delete dado.confirmpassword;
    const EMail = await this.database.user.findUnique({
      where: { email: dado.email },
    });
    if (EMail) {
      throw new ConflictException('Esse email ja foi cadastrado');
    }
    const Nick = await this.database.user.findUnique({
      where: { nickname: dado.nickname },
    });
    if (Nick) {
      throw new ConflictException('Nick ja existente');
    }
    const hash = await bcrypt.hash(dado.password, 10);
    const usuario = await this.database.user.create({
      data: {
        ...dado,
        password: hash,
      },
    });
    delete usuario.password;
    return usuario;
  }

  findOne(id: string): Promise<User> {
    const usuario = this.database.user.findUnique({
      where: { id },
    });
    if (!usuario) {
      throw new NotFoundException('Usuario nao encontrado');
    }

    return usuario;
  }

  remove(id: string) {
    return `This action removes a #${id} user`;
  }

  async addList(user: User, gameId: string) {
    const game = await this.database.game.findUnique({
      where: { id: gameId },
    });

    if (!game) {
      throw new NotFoundException('Jogo não encontrado');
    }

    const userLikedGame = await this.database.user.findUnique({
      where: { id: user.id },
      include: {
        Games: true,
      },
    });

    const userGamesList = userLikedGame.Games;
    let foundGame = false;
    userGamesList.map((game) => {
      if (game.id === gameId) {
        foundGame = true;
      }
    });
    if (foundGame) {
      await this.database.user.update({
        where: { id: user.id },
        data: {
          Games: {
            disconnect: {
              id: game.id,
            },
          },
        },
      });
      return { message: 'Jogo removido da lista ' };
    } else {
      await this.database.user.update({
        where: { id: user.id },
        data: {
          Games: {
            connect: {
              id: game.id,
            },
          },
        },
      });
      return { message: 'Jogo adicionado na lista' };
    }
  }
  async userList(id: string) {
    const games = await this.database.user.findUnique({
      where: { id: id },
      include: {
        Games: true,
      },
    });
    return games;
  }
}
