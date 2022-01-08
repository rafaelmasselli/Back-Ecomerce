import { IsString, IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreateGameDto {
  @IsString()
  @IsNotEmpty({ message: 'Preencha o campo nome' })
  name: string;

  @IsNotEmpty({ message: 'Preencha o campo data' })
  @IsString()
  data: string;

  @IsNotEmpty({ message: 'Preencha o image com uma url do jogo' })
  @IsString()
  image: string;

  @IsNotEmpty({ message: 'Preencha o campo produtora' })
  @IsString()
  studio: string;
}
