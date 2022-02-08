import { Global, Module } from '@nestjs/common';

import { TodoModule } from '../todo/todo.module';

const MODULES = [
  TodoModule
];

const PROVIDERS = [

];

const GUARDS = [

];

const SERVICES = [

];

@Global()
@Module({
  imports: [...MODULES],
  providers: [...GUARDS, ...PROVIDERS, ...SERVICES],
  exports: [...MODULES, ...PROVIDERS, ...SERVICES],
})
export class SharedModule {
}
