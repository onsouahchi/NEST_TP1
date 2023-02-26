enum TodoStatusEnum {
    'active' = "En cours",
    'waiting' = "En attente",
    'done' = "Terminé"
}

class TodoModel {
    id: string;
    name: string;
    description: string;
    status: TodoStatusEnum;
    createdDate: Date;
}

export { TodoModel, TodoStatusEnum };