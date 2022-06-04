class State {
    Name;
    BlockId;
    BlockElement;
    toggleState(){
        console.log('Sub classes have to Override this method!!')
        return null;
    };
}

class OnState extends State{
    constructor(blockid, blockelement){
        super();
        this.Name="ON";
        this.BlockId=blockid;
        this.BlockElement = blockelement;
        this.initialState();
    }
    initialState(){
        if(!this.BlockElement.classList.contains('On-State')){
            this.BlockElement.classList.add('On-State');
        }
    }
    toggleState(){
        if(this.BlockElement.classList.contains('Off-State')){
            this.BlockElement.classList.remove('Off-State');
        }
        
        if(!this.BlockElement.classList.contains('On-State')){
            this.BlockElement.classList.add('On-State');
        }
    }
}

class OffState extends State{ 
    constructor(blockid, blockelement){
        super();
        this.Name="OFF";
        this.BlockId=blockid;
        this.BlockElement = blockelement;
        this.initialState();
    }
    initialState(){
        if(!this.BlockElement.classList.contains('Off-State')){
            this.BlockElement.classList.add('Off-State');
        }
    }
    toggleState(){
        if(this.BlockElement.classList.contains('On-State')){
            this.BlockElement.classList.remove('On-State');
        }
        
        if(!this.BlockElement.classList.contains('Off-State')){
            this.BlockElement.classList.add('Off-State');
        }
    }
}

export {OnState, OffState}