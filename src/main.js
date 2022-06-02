import { Block } from "./block";
import './style.css'

const { v4: uuidv4 } = require('uuid');
const matrix = [];
const r=4, c = 4, len =3;
const head = {i:0,j:0}
const tail = {i:0,j:0}

function Placeholder(Id){
    let placeholder = document.createElement("div");

    //Set its unique ID.
    placeholder.id = 'placeholder-' + Id;

    //Add your content to the DIV
    placeholder.classList.add("placeholder");
   return placeholder;
}

function MoveUP(){
    if(head.i > 0){        
        (matrix[tail.i][tail.j]).ChangeState();
        Transform();
        head.i--;
        (matrix[head.i][head.j]).ChangeState();
    }
}

function MoveDOWN(){
    if(head.i < (r-1)){
        (matrix[tail.i][tail.j]).ChangeState();
        Transform();
        head.i++;
        (matrix[head.i][head.j]).ChangeState();
    }
}

function MoveLEFT(){
    if(head.j > 0){
        (matrix[tail.i][tail.j]).ChangeState();
        Transform();
        head.j--;
        (matrix[head.i][head.j]).ChangeState();
    }
}

function MoveRIGHT(){
    if(head.j < (c-1)){
        (matrix[tail.i][tail.j]).ChangeState();
        Transform();
        head.j++;
        (matrix[head.i][head.j]).ChangeState();
    }
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

function Main(){   
    for(let i = 0; i < r; i++){
        let col = [];
        let placeholder = Placeholder(uuidv4());
        document.body.appendChild(placeholder);
        for(let j = 0; j < c; j++){
            let block =  new Block(uuidv4(), placeholder);
            col[j] = block;
        }
        matrix[i] = col;        
    }
    
    for (let j = 0; j < len; j++) {
        //Set initial block ON
        head.j = j;
        (matrix[head.i][head.j]).ChangeState();
    }

    document.addEventListener('keydown', (e) => {
        switch(`${e.code}`){
            case `ArrowUp`: MoveUP(); break;
            case `ArrowDown`: MoveDOWN(); break;
            case `ArrowRight`: MoveRIGHT(); break;
            case `ArrowLeft`: MoveLEFT(); break;
            default: break;
        }
        //console.log(head);
        //console.log(tail);
    });
}

Main();