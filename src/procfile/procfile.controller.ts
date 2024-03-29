import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ProcfileService } from './procfile.service';
import { CreateProcfileDto } from './dto/create-procfile.dto';
import { UpdateProcfileDto } from './dto/update-procfile.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Procfile } from './entities/procfile.entity';
import { AuthGuard } from '@nestjs/passport';
import { LoggedUser } from 'src/auth/logged-user.decorator';
import { User } from 'src/users/entities/user.entity';

@ApiTags('profile')
@UseGuards(AuthGuard())
@ApiBearerAuth()
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
  create(@LoggedUser() user: User, @Body() createProcfileDto: CreateProcfileDto): Promise<Procfile> {
    return this.procfileService.create(user.id, createProcfileDto);
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
