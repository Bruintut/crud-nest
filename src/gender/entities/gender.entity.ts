import { Game } from "@prisma/client";

export class Gender {
  id?: string;
  name: string;
  game?: Game[];
}
