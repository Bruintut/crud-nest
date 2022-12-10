import * as bcrypt from 'bcrypt';
import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { handleError } from 'src/utils/handle-error.utils';


@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateUserDto): Promise<User> {
    const data: User = {
      ...dto,
      password: await bcrypt.hash(dto.password, 10),};
      
    return this.prisma.user.create({ data: dto }).catch(handleError);
  }

  findAll() {
    return this.prisma.user.findMany({
      select: {
        id: true,
        name: true,
        nickname: true,
        email: true,
        isAdmin: true,
        password: false,
      },
    });
  }

  async findOne(id: string): Promise<User> {
    const record = await this.prisma.user.findUnique({ where: { id } });
    if (!record) {
      throw new NotFoundException(`Registro com ID '${id}' não encontrado`);
    }

    return record;
  }

  async update(id: string, dto: UpdateUserDto): Promise<User> {
    await this.findOne(id);
    
    return this.prisma.user.update({where: { id },data: dto});

  }

  async delete(id: string) {
    await this.findOne(id);
    await this.prisma.user.delete({ where: { id } });
  }

  
}
