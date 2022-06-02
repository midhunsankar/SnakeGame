class State {
    Name;
    BlockId;
    toggleState(){
        console.log('Sub classes have to Override this method!!')
        return null;
    };
}

class OnState extends State{
    constructor(blockid){
        super();
        this.Name="ON";
        this.BlockId=blockid;
        this.initialState();
    }
    initialState(){
        let blockelement = document.getElementById('block-'+this.BlockId);
        if(!blockelement.classList.contains('On-State')){
            blockelement.classList.add('On-State');
        }
    }
    toggleState(){
        let blockelement = document.getElementById('block-'+this.BlockId);
        if(blockelement.classList.contains('Off-State')){
            blockelement.classList.remove('Off-State');
        }
        
        if(!blockelement.classList.contains('On-State')){
            blockelement.classList.add('On-State');
        }
    }
}

class OffState extends State{
    constructor(blockid){
        super();
        this.Name="OFF";
        this.BlockId=blockid;
        this.initialState();
    }
    initialState(){
        let blockelement = document.getElementById('block-'+this.BlockId);
        if(!blockelement.classList.contains('Off-State')){
            blockelement.classList.add('Off-State');
        }
    }
    toggleState(){
        let blockelement = document.getElementById('block-'+this.BlockId);
        if(blockelement.classList.contains('On-State')){
            blockelement.classList.remove('On-State');
        }
        
        if(!blockelement.classList.contains('Off-State')){
            blockelement.classList.add('Off-State');
        }
    }
}

export {OnState, OffState}