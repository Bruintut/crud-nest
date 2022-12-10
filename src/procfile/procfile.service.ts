import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { error } from 'console';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProcfileDto } from './dto/create-procfile.dto';
import { UpdateProcfileDto } from './dto/update-procfile.dto';
import { Procfile } from './entities/procfile.entity';

@Injectable()
export class ProcfileService {
  constructor(private readonly prisma: PrismaService) {}
  async create(Dto: CreateProcfileDto): Promise<Procfile> {
    return this.prisma.procfile.create({ data: Dto }).catch(this.handleError);
  }

  findAll(): Promise<Procfile[]> {
    return this.prisma.procfile.findMany();
  }

  async findOne(id: string): Promise<Procfile> {
    const record = await this.prisma.procfile.findUnique({ where: { id } });
    if (!record) {
      throw new NotFoundException(`Registro com ID '${id}' não encontrado`);
    }

    return record;
  }

  update(id: string, updateProcfileDto: UpdateProcfileDto) {
    return `This action updates a #${id} procfile`;
  }

  async delete(id: string) {
    await this.findOne(id);
    await this.prisma.procfile.delete({ where: { id } });
  }

  handleError(error: Error): undefined {
    const errorLines = error.message?.split('\n');
    const lastErrorLine = errorLines[errorLines.length - 1].trim();

    throw new UnprocessableEntityException(
      lastErrorLine || 'Algum error ocorreu',
    );
  }
}
