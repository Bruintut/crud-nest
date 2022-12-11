import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginResponseDto } from './dto/login-response.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}
  async login(loginDto: LoginDto): Promise<LoginResponseDto> {

    const {email, password} = loginDto;

    const user = await this.prisma.user.findUnique({where: {}});
    return{
      token: 'Teste',
      user: undefined,

    };
  }
}
