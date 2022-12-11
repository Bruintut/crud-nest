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

  async create(dto: CreateUserDto){
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
        password: false,
        isAdmin: true,
        
      },
    });
  }

  async findOne(id: string) {
    const record = await this.prisma.user.findUnique({ where: { id } });
    if (!record) {
      throw new NotFoundException(`Registro com ID '${id}' não encontrado`);
    }

    return record;
  }

  async update(id: string, dto: UpdateUserDto) {
    await this.findOne(id);

    const data: Partial<User> = {...dto};

    if(data.password){
      data.password = await bcrypt.hash(data.password, 10);
    }
    
    return this.prisma.user.update({where: { id },data: dto}).catch(handleError);

  }

  async delete(id: string) {
    await this.findOne(id);
    await this.prisma.user.delete({ where: { id } });
  }

  
}
