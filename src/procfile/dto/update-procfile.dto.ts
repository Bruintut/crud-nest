import { PartialType } from '@nestjs/swagger';
import { CreateProcfileDto } from './create-procfile.dto';

export class UpdateProcfileDto extends PartialType(CreateProcfileDto) {}
