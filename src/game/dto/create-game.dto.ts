import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsUrl } from 'class-validator';

export class CreateGameDto {
 
  @IsString()
  @ApiProperty({description: 'Nome do jogo!', example:'God of War'})
  title: string;

  @IsString()
  @ApiProperty({description: 'Imagem do jogo!', 
  example:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR05zO3uU9DxnoqNR1VbcwKzSoq3iND1uKHaA&usqp=CAU'})
  coverImageUrl: string;

  @IsString()
  @ApiProperty({description: 'Descrição do jogo!', example:'Jogo com tema de ação e aventura!'})
  description: string;

  @IsNumber()
  @ApiProperty({description: 'Ano de lançamento do jogo!', example:'21/10/2015'})
  year: number;

  @IsNumber({maxDecimalPlaces: 2})
  @ApiProperty({description: 'Nota do jogo!', example:'10'})
  imdbScore: number;

  @IsString()
  @IsUrl()
  @ApiProperty({description: 'URL do trailer do jogo no youtube!'})
  trailerYouTubeUrl: string;

  @IsString()
  @IsUrl()
  @ApiProperty({description: 'URL da gameplay do jogo no youtube!'})
  gameplayYouTubeUrl: string;
}
