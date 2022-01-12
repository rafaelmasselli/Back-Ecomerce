import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateAuthDto, AuthReponse } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { PrismaService } from './../prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private database: PrismaService, private jwt: JwtService) {}

  async login(data: CreateAuthDto): Promise<AuthReponse> {
    const { email, password } = data;
    const user = await this.database.user.findUnique({
      where: { email },
    });
    if (!user) {
      throw new NotFoundException('Usuario nao encontrado');
    }
    const hash = await bcrypt.compare(password, user.password);

    if (!hash) {
      throw new UnauthorizedException('Credenciais invalidas');
    }

    delete user.password;
    return {
      token: this.jwt.sign({ email }),
      user,
    };
  }
}
