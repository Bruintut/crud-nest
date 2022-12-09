import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { ProcfileModule } from './procfile/procfile.module';
import { GameModule } from './game/game.module';


@Module({
  imports: [UsersModule, PrismaModule, ProcfileModule, GameModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class AppModule {}
