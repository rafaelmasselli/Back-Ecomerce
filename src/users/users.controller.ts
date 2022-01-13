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
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation, ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { AuthUser } from './../auth/auth-user.decoretor';
@ApiTags('user')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  @ApiOperation({
    summary: 'Cadastro de um usuario',
  })
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }
  @UseGuards(AuthGuard())
  @Get(':id')
  @ApiOperation({
    summary: 'Mostrar um unico id',
  })
  findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne(id);
  }

  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Deletar um perfil',
  })
  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
  @UseGuards(AuthGuard())
  @Patch('/:id')
  @ApiOperation({
    summary: 'Adicionar um jogo na lista de um usuário, ou remover',
  })
  @ApiBearerAuth()
  addList(@AuthUser() user: User, @Param('id') gameId: string) {
    return this.usersService.addList(user, gameId);
  }
  @UseGuards(AuthGuard())
  @Get()
  @ApiOperation({
    summary: 'Ver os intens do carrinho do usuario',
  })
  userList(@AuthUser() user: User) {
    return this.usersService.userList(user.id);
  }
}
