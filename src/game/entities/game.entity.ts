import { Gender } from "src/gender/entities/gender.entity";
import { CreateGameDto } from "../dto/create-game.dto";

export class Game extends CreateGameDto {
    id?: string;
    name: string;
    title: string;
    imgUrl: string;
    genders: Gender[];
}
