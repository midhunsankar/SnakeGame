import { OnState, OffState } from './state'

class Block {
    Id;
    currentState = null;    
    placeholder = null;
    constructor(Id, placeholder){    
        this.Id = Id;
        this.placeholder = placeholder;
        this.CreateBlock();
        this.currentState = new OffState(this.Id);
    }

    ChangeState(){
        if(this.currentState instanceof OffState){
            this.currentState = new OnState(this.Id);
        }else{
            this.currentState = new OffState(this.Id);
        }
        this.currentState.toggleState();
    }

    CreateBlock(){
        var block = document.createElement("div");

        //Set its unique ID.
        block.id = 'block-' + this.Id;

        //Add your content to the DIV
        block.classList.add("block");

        //Finally, append the element to the HTML body
        this.placeholder.appendChild(block);
    }
}

export {Block}