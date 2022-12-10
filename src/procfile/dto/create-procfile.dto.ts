import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateProcfileDto {
    
    name: string
    title: string
    imageUrl: string
    userId: string
}
