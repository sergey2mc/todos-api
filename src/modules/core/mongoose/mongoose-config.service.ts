import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModuleOptions, MongooseOptionsFactory } from '@nestjs/mongoose';


@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
  constructor(private config: ConfigService) {
  }
  createMongooseOptions(): MongooseModuleOptions {
    const host = this.config.get('DB_HOST');
    const port = this.config.get('DB_PORT');
    const dbName = this.config.get('DB_NAME');
    const replicaSet = this.config.get('DB_REPLICA_SET');
    const authSource = this.config.get('DB_AUTH_SOURCE');
    const ssl = JSON.parse(this.config.get('DB_SSL'));
    return {
      uri: `mongodb://${host}${port && `:${port}` || ''}/${dbName}`,
      user: this.config.get('DB_USERNAME'),
      pass: this.config.get('DB_PASSWORD'),
      ...(replicaSet && {replicaSet}), // optional injection
      ...(authSource && {authSource}), // optional injection
      ...(ssl && {ssl}), // optional injection
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
  }
}
