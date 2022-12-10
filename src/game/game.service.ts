import { Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Game } from './entities/game.entity';

@Injectable()
export class GameService {
    constructor(private readonly prisma: PrismaService) {}
  async create(dto: CreateGameDto) {
    return this.prisma.game.create({data: dto}).catch(this.handleError);
  }
 

  findAll(): Promise<Game[]> {
    return this.prisma.game.findMany();
  }

  async findOne(id: string) {

    const shearch = await this.prisma.game.findUnique({where: {id}})
    if(!shearch){
      throw new NotFoundException(`Jogo com ID '${id}' não encontrado`)
    }
    return shearch;
  }

  async update(id: string, dto: UpdateGameDto): Promise<Game> {
    await this.findOne(id)

    const data: Partial<Game>= {...dto} 
    return this.prisma.game.update({where: {id}, data,}).catch(this.handleError);
  }

  async delete(id: string) {
    await this.findOne(id)
    return this.prisma.game.delete({where: {id}}).catch(this.handleError);;
  }

  handleError(error: Error): undefined {
    throw new UnprocessableEntityException('Algum erro ocorreu');
  }
}
