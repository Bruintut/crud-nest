import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateGenderDto {
  @IsString()
  @ApiProperty({ description: 'Nome do Genero!', example: 'Ação' })
  name: string;
}
