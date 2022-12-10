import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ description: 'Nome do Usuário' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'Nickname do Usuário' })
  @IsString()
  nickname: string;

  @IsEmail()
  @ApiProperty({ description: 'Email do Usuário' })
  @IsString()
  email: string;

  @ApiProperty({ description: 'Senha do Usuário' })
  @IsString()
  @MinLength(8)
  password: string;

  @ApiProperty({ description: 'Confirmação de senha do Usuário' })
  @IsString()
  confirmPassword: string;

  @ApiProperty()
  @IsBoolean()
  isAdmin: boolean;
}
