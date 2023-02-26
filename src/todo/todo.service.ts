import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { PROVIDER_TOKEN } from 'src/common/common.module';
import { AddTodoDTO, updateTodoDTO } from './todo.dto';
import { TodoModel, TodoStatusEnum } from './todo.model';


@Injectable()
export class TodoService {
    @Inject(PROVIDER_TOKEN.UUID) private uuid;

    private todos: TodoModel[] = []
 
    getTodos(): TodoModel[] {
        return this.todos;
    }

    addTodo(body: AddTodoDTO): TodoModel {
        const newTodo = {
            id: this.uuid(),
            name: body.name,
            description: body.description,
            status: TodoStatusEnum.waiting,
            createdDate: new Date()
        }
        this.todos.push(newTodo);
        return newTodo;
    }

    getTodoIndex(id: string): number {
        const index = this.todos.findIndex(todo => todo.id === id);
        if (index === -1) throw new NotFoundException();
        return index;
    }

    getTodo(id: string): TodoModel {
        return this.todos[this.getTodoIndex(id)];
    }

    deleteTodo(id): { count: number } {
        const index = this.getTodoIndex(id);
        this.todos.splice(index, 1);
        return { count: 1 };
    }

    updateTodo(id, body: updateTodoDTO): TodoModel {
        const index = this.getTodoIndex(id);
        this.todos[index] = {...this.todos[index], ...body};

        return this.todos[index];
    }
}


