import ToDo from "../entites/todo";

class ToDoService{

    todos: ToDo[] = [];
    constructor(){
        this.todos.push(new ToDo(1 , 'todo 1' , 'description 1'));
    }

    getAll(){
        return new Promise((resolve) => {
            resolve(this.todos)
        });
    }

    get(id: Number){
        return new Promise((resolve) => {
            resolve(this.todos.find(d => d.id === id))
        });
    }

    add(todo: ToDo){
        todo.id = this.todos.length + 1;
        this.todos.push(todo);
        return new Promise((resolve) => {
            resolve(todo)
        });
    }
}

export default new ToDoService();