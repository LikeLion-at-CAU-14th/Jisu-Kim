import Complete from "../DOM/complete.js";

class CompleteController{
    constructor(done){
        this.complete = new Complete(done);
        this.delBtnNode = this.complete.getDelBtn();
        this.delBtnNode.addEventListener('click', ()=>{
            this.delComplete();
        });
    }

    addComplete(){
        const completeList = document.getElementById("complete-list");
        completeList.appendChild(this.complete.getRow());
    }

    delComplete(){
        this.complete.getRow().remove();
    }
}   

export default CompleteController;