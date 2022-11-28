import { Injectable } from '@nestjs/common';
import { userInfo } from 'os';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
 
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateUserDto): Promise<User> {
    const user: User = {
      ...dto,
    };

    return this.prisma.user.create({
      data: user,
    });
    
  }

  findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  findOne(id: string): Promise<User> {
    return this.prisma.user.findUnique({
      where:{
        id,
      }
    });
  }

  update(id: string, dto: UpdateUserDto): Promise<User> {
    const data: Partial<User> = {...dto}
    return this.prisma.user.update({
      where: {id},
      data,
    });
  }

  remove(id: string) {
    return `This action removes a #${id} user`;
  }
}
