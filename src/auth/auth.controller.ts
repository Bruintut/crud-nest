import { Body, Controller, Get, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags, } from '@nestjs/swagger';
import { User } from 'src/users/entities/user.entity';
import { AuthService } from './auth.service';
import { LoginResponseDto } from './dto/login-response.dto';
import { LoginDto } from './dto/login.dto';
import { LoggedUser } from './logged-user.decorator';


ApiTags('Atenticação')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({summary: 'Realizar Login'})
  login(@Body() loginDto: LoginDto): Promise<LoginResponseDto>{
    return this.authService.login(loginDto)
  }

  @ApiTags('auth')
  @Get()
  @UseGuards(AuthGuard())
  @ApiOperation({summary: 'Retorna o usuário autenticado no momento'})
  @ApiBearerAuth()
  profile(@LoggedUser() user: User){
    return user;
  }
}
