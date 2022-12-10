import { Procfile } from "src/procfile/entities/procfile.entity";

export class User {
    id?: string;
    name: string;
    nickname: string;    
    email: string;
    password: string;
    isAdmin: boolean;
    procfile?: Procfile[];
}
