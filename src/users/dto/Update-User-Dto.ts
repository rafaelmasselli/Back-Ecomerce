import { IsString, IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsString()
  @IsNotEmpty({ message: ' Campo Nome nao pode estar vazia' })
  @ApiProperty()
  name: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty({ message: ' Campo Email nao pode estar vazia' })
  @ApiProperty()
  email: string;

  @IsString()
  @IsNotEmpty({ message: ' Campo nickname nao pode estar vazia' })
  @ApiProperty()
  nickname: string;

  @IsString()
  @IsNotEmpty({ message: ' Campo data de aniversario nao pode estar vazia' })
  @ApiProperty()
  birthday: string;

  @IsString()
  @IsNotEmpty({ message: ' Insira alguma imagem url' })
  @ApiProperty()
  image: string;
}
