import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto, AuthReponse } from './dto/create-auth.dto';
import { ApiOperation, ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { AuthUser } from './auth-user.decoretor';
import { User } from '@prisma/client';
@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private service: AuthService) {}

  @Post('login')
  @ApiOperation({
    summary: 'Gera um token para o login',
  })
  login(@Body() data: CreateAuthDto): Promise<AuthReponse> {
    return this.service.login(data);
  }

  @UseGuards(AuthGuard())
  @Get('profile')
  @ApiOperation({
    summary: 'Pegar o usuário logado no momento',
  })
  @ApiBearerAuth()
  profile(@AuthUser() user: User) {
    return user;
  }
}
