import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProcfileService } from './procfile.service';
import { CreateProcfileDto } from './dto/create-procfile.dto';
import { UpdateProcfileDto } from './dto/update-procfile.dto';

@Controller('procfile')
export class ProcfileController {
  constructor(private readonly procfileService: ProcfileService) {}

  @Post()
  create(@Body() createProcfileDto: CreateProcfileDto) {
    return this.procfileService.create(createProcfileDto);
  }

  @Get()
  findAll() {
    return this.procfileService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.procfileService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProcfileDto: UpdateProcfileDto) {
    return this.procfileService.update(+id, updateProcfileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.procfileService.remove(+id);
  }
}
