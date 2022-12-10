import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProcfileService } from './procfile.service';
import { CreateProcfileDto } from './dto/create-procfile.dto';
import { UpdateProcfileDto } from './dto/update-procfile.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Procfile } from './entities/procfile.entity';

@ApiTags('procfile')
@Controller('procfile')
export class ProcfileController {
  constructor(private readonly procfileService: ProcfileService) {}

  @Get()
  @ApiOperation({summary: 'Visualizar todos os Perfis!'})
  findAll(): Promise<Procfile[]> {
    return this.procfileService.findAll();
  }

  @Post()
  @ApiOperation({
    summary: 'Criar um novo perfil!',
  })
  create(@Body() createProcfileDto: CreateProcfileDto): Promise<Procfile> {
    return this.procfileService.create(createProcfileDto);
  }

  

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.procfileService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProcfileDto: UpdateProcfileDto) {
    return this.procfileService.update(id, updateProcfileDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.procfileService.delete(id);
  }
}
