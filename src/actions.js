const matrix = [];
const rows = 8, columns = 8, length =3;
const head = {i:0,j:0}
const tail = {i:0,j:0}
const artifact = {i:null,j:null}
let gameover = false, captured = 0;
let direction = "RIGHT";

function MoveUP(){
    if(head.i > 0 && !gameover){       
        if(VerifyMove("UP")){ 
            (matrix[tail.i][tail.j]).ChangeState();
            Transform();
            head.i--;
            (matrix[head.i][head.j]).ChangeState();
            ClaimArtifact();
        }else{
            //Illegal Move:UP
            gameover = true;
        }
    }else{
        //Illegal Move:UP
        gameover = true;
    }
    direction = "UP";
}

function MoveDOWN(){
    if(head.i < (rows-1) && !gameover){
        if(VerifyMove("DOWN")){ 
            (matrix[tail.i][tail.j]).ChangeState();
            Transform();
            head.i++;
            (matrix[head.i][head.j]).ChangeState();
            ClaimArtifact();
        }else{
            //Illegal Move:DOWN
            gameover = true;
        }
    }else{
        //Illegal Move:DOWN
        gameover = true;
    }
    direction = "DOWN";
}

function MoveLEFT(){
    if(head.j > 0  && !gameover){
        if(VerifyMove("LEFT")){ 
            (matrix[tail.i][tail.j]).ChangeState();
            Transform();
            head.j--;
            (matrix[head.i][head.j]).ChangeState();
            ClaimArtifact();
        }else{
            //Illegal Move:LEFT
            gameover = true;
        }
    }else{
        //Illegal Move:LEFT
        gameover = true;
    }
    direction = "LEFT";
}

function MoveRIGHT(){
    if(head.j < (columns-1) && !gameover){
        if(VerifyMove("RIGHT")){ 
            (matrix[tail.i][tail.j]).ChangeState();
            Transform();
            head.j++;
            (matrix[head.i][head.j]).ChangeState();
            ClaimArtifact();
        }else{
            //Illegal Move:RIGHT
            gameover = true;
        }
    }else{
        //Illegal Move:RIGHT
        gameover = true;
    }
    direction = "RIGHT";
}

function VerifyMove(move){
    if(head.j == tail.j){
        if(move == "UP"){
            if(!(head.i < tail.i)){
                return false;
            }
        }else if(move == "DOWN"){
            if(!(head.i > tail.i)){
                return false;
            }
        }
    }
    else if(head.i == tail.i){
        if(move == "LEFT"){
            if(!(head.j < tail.j)){
                return false;
            }
        }else if(move == "RIGHT"){
            if(!(head.j > tail.j)){
                return false;
            }
        }
    }
    else{
        
        let block = matrix[head.i][tail.j];
        let prev = (block.currentState.Name === "ON")? { i:head.i, j:tail.j } : { i:tail.i, j:head.j };
        
        if(move == "UP" || move =="DOWN"){
            let next = move == "UP" ? { i:head.i - 1, j:head.j } : { i:head.i + 1, j:head.j };
            if(next.i == prev.i && next.j == prev.j){
                return false;
            }
        }
        else if((move == "LEFT" || move =="RIGHT")){
            let next = move == "LEFT" ? { i:head.i, j:head.j - 1 } : { i:head.i, j:head.j + 1 };
            if(next.i == prev.i && next.j == prev.j){
                return false;
            }
        }        
    }
    return true;
}

function Transform(){
    //Head and Tail in same column.
    if(head.j == tail.j){
        if(head.i > tail.i){
            tail.i++;
        }
        else{
            tail.i--;
        }
    }
    //Head and Tail in same row.
    else if(head.i == tail.i){
        if(head.j > tail.j){
            tail.j++;
        }
        else{
            tail.j--;
        }
    }
    //Head and Tail in diffrent row and column.
    else{
        let block = matrix[head.i][tail.j];
        if(block.currentState.Name === "ON"){
            tail.i = head.i;
        }else{
            tail.j = head.j;
        }
    }
}

function ClaimArtifact(){
    if(head.i === artifact.i && head.j === artifact.j){
        /* Artifact Captured. */
        (matrix[artifact.i][artifact.j]).UpdateArtifact();
        artifact.i = null;
        artifact.j = null;
        captured++;
    }
}

export {
matrix, rows, columns, length, head, tail, artifact, gameover, direction, captured,
MoveUP, MoveDOWN, MoveLEFT, MoveRIGHT
}