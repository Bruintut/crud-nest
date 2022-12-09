import { Game } from "src/game/entities/game.entity";
import { CreateProcfileDto } from "../dto/create-procfile.dto";

export class Procfile extends CreateProcfileDto {
    id?: string;
    name: string;
    title: string;
    imageUrl: string;
    games?: Game[];
}
