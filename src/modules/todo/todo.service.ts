import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { PickProperty } from '../../typings/types';

import { TodoDoc } from './models/todo.model';

@Injectable()
export class TodoService {
  constructor(
    @InjectModel('Todo') private readonly todoModel: Model<TodoDoc>,
  ) {}

  find: PickProperty<Model<TodoDoc>, 'find'> = this.todoModel.find.bind(
    this.todoModel,
  );
  findById: PickProperty<Model<TodoDoc>, 'findById'> = this.todoModel.findById.bind(
    this.todoModel,
  );
  create: PickProperty<Model<TodoDoc>, 'create'> = this.todoModel.create.bind(
    this.todoModel,
  );
  findOneAndUpdate: PickProperty<Model<TodoDoc>, 'findOneAndUpdate'> = this.todoModel.findOneAndUpdate.bind(
    this.todoModel,
  );
  deleteOne: PickProperty<Model<TodoDoc>, 'deleteOne'> = this.todoModel.deleteOne.bind(
    this.todoModel,
  );
}
