import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsUrl } from "class-validator";

export class CreateProcfileDto {
    
    @ApiProperty({ description:'Nome do Perfil' })
    @IsString()
    name: string

    @ApiProperty({ description:'Nickname do Perfil' })
    @IsString()
    title: string

    @ApiProperty({ description:'Imagem do Perfil' })
    @IsString()
    @IsUrl()
    imageUrl: string

    @ApiProperty({ description:'Id do User gerenciador do Perfil' })
    @IsString()
    userId: string
}
