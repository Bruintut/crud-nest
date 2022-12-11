import { Module } from '@nestjs/common';
import { ProcfileService } from './procfile.service';
import { ProcfileController } from './procfile.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [PrismaModule, PassportModule.register({defaultStrategy: 'jwt'})],
  controllers: [ProcfileController],
  providers: [ProcfileService]
})
export class ProcfileModule {}
