import { Game } from "src/game/entities/game.entity";
import { User } from "src/users/entities/user.entity";
import { CreateProcfileDto } from "../dto/create-procfile.dto";

export class Procfile extends CreateProcfileDto {
    id?: string;
    name: string;
    title: string;
    imageUrl: string;
    user?: User;
    game?: Game[];
    
}
