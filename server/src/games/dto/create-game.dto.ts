import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateGameDto {
  @IsString()
  @ApiProperty()
  @IsNotEmpty({ message: ' Preencha o campo nome' })
  name: string;

  @IsNotEmpty({ message: ' Preencha o campo data' })
  @ApiProperty()
  @IsString()
  date: string;

  @IsNotEmpty({ message: ' Preencha o image com uma url do jogo' })
  @ApiProperty()
  @IsString()
  image: string;

  @IsNotEmpty({ message: ' Preencha o campo produtora' })
  @IsString()
  @ApiProperty()
  studio: string;

  @IsNotEmpty({ message: ' Preencha o campo Valor' })
  @ApiProperty()
  @IsString()
  price: string;

  @IsNotEmpty({ message: ' Preencha o requisitos' })
  @ApiProperty()
  @IsString()
  requirement: string;
}
