import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class LoginDto{
    
    
    @IsString()
    @IsNotEmpty()
    @ApiProperty({description: 'Nickname do usuário!', example:'example@example.com'})
    nickname: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({description: 'Senha do usuário!', example:'senha123'})
    password: string;
}