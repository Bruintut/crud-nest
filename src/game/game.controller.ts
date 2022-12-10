import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, HttpCode } from '@nestjs/common';
import { GameService } from './game.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('game')
@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Post()
  @ApiOperation({ description: 'Criar novo jogo'})
  create(@Body() createGameDto: CreateGameDto) {
    return this.gameService.create(createGameDto);
  }

  @Get()
  @ApiOperation({ description: 'Visualizar todos os jogos'})
  findAll() {
    return this.gameService.findAll();
  }

  @Get(':id')
  @ApiOperation({ description: 'PEsquisar por Id'})
  findOne(@Param('id') id: string) {
    return this.gameService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ description: 'Atualizar um jogo'})
  update(@Param('id') id: string, @Body() updateGameDto: UpdateGameDto) {
    return this.gameService.update(id, updateGameDto);
  }

  @Delete(':id')
  @ApiOperation({ description: 'Excluir um jogo'})
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id') id: string) {
    return this.gameService.delete(id);
  }
}
