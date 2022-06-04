import { OnState, OffState } from './state'

class Block {
    Id;
    currentState = null;    
    placeholder = null;
    artifact = false;
    element = null;
    constructor(Id, placeholder){    
        this.Id = Id;
        this.placeholder = placeholder;
        let element = this.CreateBlock();
        this.placeholder.appendChild(element);
        this.element = element;
        this.currentState = new OffState(this.Id, this.element);
    }

    ChangeState(){
        if(this.currentState instanceof OffState){
            this.currentState = new OnState(this.Id, this.element);
        }else{
            this.currentState = new OffState(this.Id, this.element);
        }
        this.currentState.toggleState();
    }

    CreateBlock(){
        let blockelement = document.createElement("div");

        //Set its unique ID.
        blockelement.id = 'block-' + this.Id;

        //Add your content to the DIV
        blockelement.classList.add("block");

        return blockelement;
    }

    CheckArtifact(){
        return this.artifact;
    }

    UpdateArtifact(){
        this.artifact = !this.artifact;
        this.element.classList.toggle('artifact');
    }
}

export {Block}