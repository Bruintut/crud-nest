import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGenderDto } from './dto/create-gender.dto';
import { UpdateGenderDto } from './dto/update-gender.dto';
import { Gender } from './entities/gender.entity';


@Injectable()
export class GendersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateGenderDto): Promise<Gender> {
    
    return this.prisma.gender.create({ data: dto }).catch(this.handleError);
  }

  findAll(): Promise<Gender[]> {
    return this.prisma.gender.findMany();
    
  }

  async findOne(id: string): Promise<Gender> {
    const record = await this.prisma.gender.findUnique({ where: { id } });
    if (!record) {
      throw new NotFoundException(`Registro com ID '${id}' não encontrado`);
    }

    return record;
  }

  async update(id: string, dto: UpdateGenderDto): Promise<Gender> {
    await this.findOne(id);
    
    return this.prisma.gender.update({where: { id },data: dto});

  }

  async delete(id: string) {
    await this.findOne(id);
    await this.prisma.gender.delete({ where: { id } });
  }

  handleError(error: Error): undefined {
    const errorLines = error.message?.split('\n');
    const lastErrorLine = errorLines[errorLines.length - 1].trim();

    if(!lastErrorLine){
      console.log(error)
    }

    throw new UnprocessableEntityException(lastErrorLine || 'Algum error ocorreu');
  }
}
