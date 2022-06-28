import { IsString, IsEmail, IsNotEmpty, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
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
  @Length(6, 15)
  @IsNotEmpty({ message: ' Campo Senha nao pode estar vazia' })
  @ApiProperty()
  password: string;

  @IsString()
  @Length(6, 15)
  @IsNotEmpty({ message: ' Confirme sua senha' })
  @ApiProperty()
  confirmpassword: string;

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
