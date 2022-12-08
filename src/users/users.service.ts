import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { error } from 'console';
import { userInfo } from 'os';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';


@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateUserDto): Promise<User> {
    const user: User = { ...dto };
    console.log(user)

    return this.prisma.user.create({ data: user }).catch(this.handleError);
  }

  findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
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
    const data: Partial<User> = { ...dto };
    return this.prisma.user.update({where: { id },data,});

    
  }

  async delete(id: string) {
    await this.findOne(id);
    await this.prisma.user.delete({ where: { id } });
  }

  handleError(error: Error): undefined {
    const errorLines = error.message?.split('\n');
    const lastErrorLine = errorLines[errorLines.length - 1].trim();

    throw new UnprocessableEntityException(lastErrorLine || 'Algum error ocorreu');
  }
}
