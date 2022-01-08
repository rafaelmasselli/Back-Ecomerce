import { IsString, IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: 'Campo Nome nao pode estar vazia' })
  name: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty({ message: 'Campo Email nao pode estar vazia' })
  email: string;

  @IsString()
  @Length(6, 15)
  @IsNotEmpty({ message: 'Campo Senha nao pode estar vazia' })
  password: string;

  @IsString()
  @Length(6, 15)
  @IsNotEmpty({ message: 'Confirme sua senha' })
  confirmpassword: string;

  @IsString()
  @IsNotEmpty({ message: 'Campo nickname nao pode estar vazia' })
  nickname: string;

  @IsString()
  @IsNotEmpty({ message: 'Campo data de aniversario nao pode estar vazia' })
  birthday: string;

  @IsString()
  @IsNotEmpty({ message: 'Insira alguma imagem url' })
  image: string;
}
