import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateProcfileDto {
    @ApiProperty({description: 'Nome do Perfil!'})
    @IsString()
    name: string;

    @ApiProperty({description: 'Título para o Perfil!'})
    @IsString()
    title: string;

    @ApiProperty({description: 'Url da imagem para o perfil!'})
    @IsString()
    imageUrl: string;

    @ApiProperty({description: 'Id do User'})
    @IsString()
    userId: string;
}
