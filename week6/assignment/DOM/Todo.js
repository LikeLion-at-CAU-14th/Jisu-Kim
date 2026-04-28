import Button from "./Button.js";
import Div from "./Div.js";

class Todo {
    constructor(todo){
        this.row = new Div('','row').node; //<div class="row"></div> 이렇게 만들어짐!
        this.textBox = new Div(todo, 'text-box');//<div class="text-box"></div>

        this.completeBtn = new Button('', 'complete-btn');
        this.delBtn = new Button('', 'del-btn');

        this.completeImage();
        this.delImage();
    }

    completeImage(){
        const completeImage = document.createElement("img");
        completeImage.src = "./DOM/completeBtn.png";
        this.completeBtn.node.appendChild(completeImage);
    }

    delImage(){
        const delImage = document.createElement("img");
        delImage.src = "./DOM/delBtn.png";
        this.delBtn.node.appendChild(delImage);
    }

    addRow(){
        [this.textBox, this.completeBtn, this.delBtn].forEach((dom) => {
            this.row.appendChild(dom.node);
        })
        return this.row;
    }

    getRow(){
        return this.row;
    }

    getCompleteBtn(){
        return this.completeBtn.node;
    }

    getDelBtn(){
        return this.delBtn.node;
    }

    getInnerText(){
        return this.textBox.node;
    }
}

export default Todo;