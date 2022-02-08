import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { validationSchema } from '../config/configuration';
import { MongooseConfigService } from './mongoose/mongoose-config.service';
import { SharedModule } from '../shared/shared.module';

@Module({
  imports: [
    SharedModule,
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      isGlobal: true,
      validationSchema: validationSchema,
      validationOptions: {
        allowUnknown: true,
        abortEarly: true,
      },
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useClass: MongooseConfigService,
    }),
  ]
})
export class CoreModule {
}
