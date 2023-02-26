import { PartialType } from '@nestjs/mapped-types';

class AddTodoDTO {
    name: string;
    description: string;
    status?: string;
}

class updateTodoDTO extends PartialType(AddTodoDTO) {}

export { AddTodoDTO, updateTodoDTO };
