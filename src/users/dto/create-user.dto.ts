import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'Nome do Usuário',
  })
  name: string;

  @ApiProperty({
    description: 'Nicname do Usuário',
  })
  nickname: string;

  @ApiProperty({
    description: 'CPF do Usuário',})
    cpf: string;

  @IsEmail()
  @ApiProperty({
    description: 'Email do Usuário',
  })
  email: string;

  @ApiProperty({
    description: 'Senha do Usuário',
  })
  password: string;

}
