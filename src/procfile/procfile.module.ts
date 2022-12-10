import { Module } from '@nestjs/common';
import { ProcfileService } from './procfile.service';
import { ProcfileController } from './procfile.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ProcfileController],
  providers: [ProcfileService]
})
export class ProcfileModule {}
