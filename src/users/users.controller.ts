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
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation, ApiTags, ApiBearerAuth } from '@nestjs/swagger';
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
    summary: 'Editar um perfil',
  })
  @Patch('/:id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Deletar um perfil',
  })
  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
