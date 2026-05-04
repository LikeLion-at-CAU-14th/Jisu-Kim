import Todo from "../DOM/Todo.js";
import CompleteController from "./completeController.js";

class TodoController{
    constructor(todo){
        this.newTodo=new Todo(todo);
        this.delBtnNode = this.newTodo.getDelBtn();
        this.comBtnNode = this.newTodo.getCompleteBtn();
        this.innerNode = this.newTodo.getInnerText();

        this.delBtnNode.addEventListener('click', () => {
            this.delTodo();
        });

        this.comBtnNode.addEventListener('click', () => {
            this.doneTodo();
        });
    }

    addTodo(){
        const todoList = document.getElementById("to-do-list");
        const input = document.querySelector('input');
        todoList.appendChild(this.newTodo.addRow());
        input.value = '';
    }

    delTodo(){
        this.newTodo.getRow().remove();
    }

    doneTodo(){
        const complete = new CompleteController(this.innerNode.innerText);
        complete.addComplete();
        this.newTodo.getRow().remove();
    }
}

export default TodoController;