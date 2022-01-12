import { IsString, IsNotEmpty } from 'class-validator';
import { User } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
export class CreateAuthDto {
  @IsNotEmpty({ message: ' O campo email nao pode estar vazia' })
  @ApiProperty()
  @IsString()
  email: string;

  @IsNotEmpty({ message: ' O campo Senha nao pode estar vazia' })
  @IsString()
  @ApiProperty()
  password: string;
}

export class AuthReponse {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  token: string;

  @IsNotEmpty()
  @ApiProperty()
  user: User;
}
