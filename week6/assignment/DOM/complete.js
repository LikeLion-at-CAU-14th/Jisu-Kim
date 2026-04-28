import Button from "./Button.js";
import Div from "./Div.js";

class Complete {
    constructor(done){
        this.row = new Div('', 'row').node;
        this.textBox = new Div(done, 'text-box');
        this.delBtn = new Button('', 'del-btn');
        
        this.delImage();
        this.addRow();
    }

    delImage(){
        const delImage = document.createElement("img");
        delImage.src = "./DOM/delBtn.png";
        this.delBtn.node.appendChild(delImage);
    }

    addRow(){
        [this.textBox, this.delBtn].forEach((dom)=>{
            this.row.appendChild(dom.node);
        });
        return this.row;
    }

    getRow(){
        return this.row;
    }

    getDelBtn(){
        return this.delBtn.node;
    }
}

export default Complete;