import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { error } from 'console';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utils/handle-error.utils';
import { CreateProcfileDto } from './dto/create-procfile.dto';
import { UpdateProcfileDto } from './dto/update-procfile.dto';
import { Procfile } from './entities/procfile.entity';

@Injectable()
export class ProcfileService {
  constructor(private readonly prisma: PrismaService) {}
  async create(dto: CreateProcfileDto) {
    const data: Prisma.ProcfileCreateInput = {
      name: dto.name,
      title: dto.title,
      imageUrl: dto.imageUrl,
      user: {
        connect: {
          id: dto.userId,
        },
      },
    };
    return this.prisma.procfile.create({ data }).catch(handleError);
  }

  findAll() {
    return this.prisma.procfile.findMany()
  }

  async findOne(id: string): Promise<Procfile> {
    const record = await this.prisma.procfile.findUnique({ where: { id } });
    if (!record) {
      throw new NotFoundException(`Registro com ID '${id}' não encontrado`);
    }
    return record;
  }

  async update(id: string, Dto: UpdateProcfileDto) {

    await this.findOne(id);

    return this.prisma.procfile.update({where: { id }, data: Dto }).catch(handleError);
    
  }

  async delete(id: string) {
    await this.findOne(id);
    await this.prisma.procfile.delete({ where: { id } });
  }

}
