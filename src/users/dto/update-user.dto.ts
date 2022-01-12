import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsString, IsEmail, IsOptional, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsString()
  @IsNotEmpty({ message: ' O Campo nome nao pode estar vazia' })
  @IsOptional()
  @ApiProperty()
  name: string;

  @IsString()
  @IsNotEmpty({ message: ' O campo image nao pode estar vazia' })
  @IsOptional()
  @ApiProperty()
  image: string;

  @IsString()
  @IsNotEmpty({ message: ' O campo nickname nao pode estar vazia' })
  @IsOptional()
  @ApiProperty()
  nickname: string;

  @IsString()
  @IsNotEmpty({ message: ' A data de nascimento nao pode estar vazia' })
  @IsOptional()
  @ApiProperty()
  birthday: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty({ message: ' O campo email nao pode estar vazia' })
  @IsOptional()
  @ApiProperty()
  email: string;
}
