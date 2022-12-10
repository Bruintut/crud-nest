import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { error } from 'console';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProcfileDto } from './dto/create-procfile.dto';
import { UpdateProcfileDto } from './dto/update-procfile.dto';
import { Procfile } from './entities/procfile.entity';

@Injectable()
export class ProcfileService {
  constructor(private readonly prisma: PrismaService) {}
  async create(Dto: CreateProcfileDto): Promise<Procfile> {
    const procfile: Procfile = { ...Dto };
    return this.prisma.procfile
      .create({ data: procfile })
      .catch(this.handleError);
  }

  findAll(): Promise<Procfile[]> {
    return this.prisma.procfile.findMany();
  }

  findOne(id: string)  {
    return `This action returns a #${id} procfile`;
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
