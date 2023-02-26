import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post } from '@nestjs/common';
import { TodoModel } from './todo.model';
import { AddTodoDTO, updateTodoDTO } from './todo.dto';
import { TodoService } from './todo.service';

@Controller('todos')
export class TodoController {
    constructor(private readonly todoService: TodoService) {}

    @Get()
    getTodos(): TodoModel[] {
        return this.todoService.getTodos();
    }

    @Post("add")
    addTodo(@Body() body: AddTodoDTO): TodoModel {
        return this.todoService.addTodo(body);
    }

    @Get(":id")
    getTodo(@Param('id') id: string): TodoModel {
        return this.todoService.getTodo(id);
    }

    @Delete("delete/:id")
    deleteTodo(@Param('id') id): { count: number } {
        return this.todoService.deleteTodo(id);
    }

    @Patch("update/:id")
    updateTodo(@Param("id") id, @Body() body : updateTodoDTO): TodoModel {
        return this.todoService.updateTodo(id, body);
    }
}
