import { Procfile } from "src/procfile/entities/procfile.entity";

export class User {
    id?: string;
    name: string;
    nickname: string;    
    email: string;
    password: string;
    procfile?: Procfile[];
    isAdmin: boolean;
}
