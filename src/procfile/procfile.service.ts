import { Injectable } from '@nestjs/common';
import { CreateProcfileDto } from './dto/create-procfile.dto';
import { UpdateProcfileDto } from './dto/update-procfile.dto';

@Injectable()
export class ProcfileService {
  create(createProcfileDto: CreateProcfileDto) {
    return 'This action adds a new procfile';
  }

  findAll() {
    return `This action returns all procfile`;
  }

  findOne(id: number) {
    return `This action returns a #${id} procfile`;
  }

  update(id: number, updateProcfileDto: UpdateProcfileDto) {
    return `This action updates a #${id} procfile`;
  }

  remove(id: number) {
    return `This action removes a #${id} procfile`;
  }
}
