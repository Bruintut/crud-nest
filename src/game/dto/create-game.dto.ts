import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateGameDto {
    @ApiProperty({ description: 'Nome do jogo!'})
    @IsString()
    name: string;

    @ApiProperty({ description: 'Sinopse do jogo!'})
    @IsString()
    title: string;

    @ApiProperty({ description: 'Descrição do jogo!'})
    @IsString()
    imgUrl: string;
    
}
