import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Game } from 'src/game/entities/game.entity';
import { Procfile } from 'src/procfile/entities/procfile.entity';


@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  private _procfile: Procfile[];
  private _game: Game[];
  public get game(): any {
    return this._game;
  }
  public set game(value: any) {
    this._game = value;
  }
  public get procfile(): any {
    return this._procfile;
  }
  public set procfile(value: any) {
    this._procfile = value;
  }
  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
