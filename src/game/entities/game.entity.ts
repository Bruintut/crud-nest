import { Procfile } from "@prisma/client";
import { Gender } from "src/gender/entities/gender.entity";
import { CreateGameDto } from "../dto/create-game.dto";

export class Game extends CreateGameDto {
    id?: string;
    title: string;
    coverImageUrl: string;
    description: string;
    year: number;
    imdbScore: number;
    trailerYouTubeUrl: string;
    gameplayYouTubeUrl: string;
    
}
