import './style.css'
import { Block } from "./block";
import {
    matrix, rows, columns, length, head, 
    MoveUP, MoveDOWN, MoveLEFT, MoveRIGHT
    } from './actions';

const { v4: uuidv4 } = require('uuid');
let cdate;

function Placeholder(Id){
    let placeholder = document.createElement("div");

    //Set its unique ID.
    placeholder.id = 'placeholder-' + Id;

    //Add your content to the DIV
    placeholder.classList.add("placeholder");
   return placeholder;
}

function StepArtifact(){    
    if(!cdate){
        var dt = new Date();
        let timeout = 10;
        dt.setSeconds(dt.getSeconds() + timeout);
        cdate = dt;
    }
    let now = new Date().getTime();    
    if ((cdate - now) <= 0) {
        cdate=null;
        // Do Call the Artifact function.
        console.log(now);
    }
    window.requestAnimationFrame(StepArtifact);
}

function Main(){   
    let rootPlaceholder = document.getElementById("rootPlaceholder");
    for(let i = 0; i < rows; i++){
        let col = [];
        let placeholder = Placeholder(uuidv4());
        rootPlaceholder.appendChild(placeholder);
        for(let j = 0; j < columns; j++){
            let block =  new Block(uuidv4(), placeholder);
            col[j] = block;
        }
        matrix[i] = col;        
    }
    
    for (let j = 0; j < length; j++) {
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
window.requestAnimationFrame(StepArtifact);