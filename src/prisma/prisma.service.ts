import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Procfile } from 'src/procfile/entities/procfile.entity';


@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  private _procfile: Procfile[];
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
