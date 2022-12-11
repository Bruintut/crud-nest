import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class LoginDto{
    
    
    @IsString()
    @IsNotEmpty()
    @ApiProperty({description: 'Email do usuário!', example:'example@example.com'})
    email: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({description: 'Senha do usuário!', example:'senha123'})
    password: string;
}