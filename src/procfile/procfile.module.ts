import { Module } from '@nestjs/common';
import { ProcfileService } from './procfile.service';
import { ProcfileController } from './procfile.controller';

@Module({
  controllers: [ProcfileController],
  providers: [ProcfileService]
})
export class ProcfileModule {}
