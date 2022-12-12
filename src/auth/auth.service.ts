import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginResponseDto } from './dto/login-response.dto';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService, private readonly jwtService: JwtService) {}

  async login(loginDto: LoginDto): Promise<LoginResponseDto> {
    const { nickname, password } = loginDto;

    const user = await this.prisma.user.findUnique({ where: { nickname } });

    if(!user){
      throw new UnauthorizedException('nickname or password invalid');
    }

    const isHashValid = await bcrypt.compare(password, user.password)

    if(!isHashValid){
      throw new UnauthorizedException('nickname or password invalid');
    }
    delete user.password

    return{
      token: this.jwtService.sign({nickname}),
      user,

    };
  }
}
