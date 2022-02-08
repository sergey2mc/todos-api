import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';

import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './models/todo.model';
import { TodoService } from './todo.service';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('todos')
export class TodoController {
  constructor(
    private todoService: TodoService
  ) {}

  @Get()
  async getTodos(): Promise<Todo[]> {
    return this.todoService.find({});
  }

  @Get(':id')
  async getTodo(
    @Param('id') id: string,
  ): Promise<Todo> {
    return this.todoService.findById(id);
  }

  @Post()
  @HttpCode(201)
  async createTodo(
    @Body() createTodoDto: CreateTodoDto
  ): Promise<Todo> {
    return this.todoService.create(createTodoDto);
  }

  @Put(':id')
  async updateTodo(
    @Param('id') id: string,
    @Body() updateTodoDto: UpdateTodoDto
  ): Promise<Todo> {
    return this.todoService.findOneAndUpdate(
      { _id: id },
      { ...updateTodoDto },
      { new: true },
    );
  }

  @Delete(':id')
  @HttpCode(204)
  async deleteTodo(
    @Param('id') id: string,
  ) {
    await this.todoService.deleteOne({ _id: id });
  }
}
