import './style.css'
import { Block } from "./block";
import {
    matrix, rows, columns, length, head, artifact,
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
        let timeout = 5;
        dt.setSeconds(dt.getSeconds() + timeout);
        cdate = dt;
    }
    let now = new Date().getTime();    
    if ((cdate - now) <= 0) {
        cdate=null;
        // Do Call the Artifact function.
        if(artifact.i !== null){
            if(!(matrix[artifact.i][artifact.j]).CheckArtifact()){
                /* artifact has been claimed.*/
            }
            else{
                /* Not Claimed toggle it.*/
                (matrix[artifact.i][artifact.j]).UpdateArtifact();
            }
            //(matrix[artifact.i][artifact.j]).UpdateArtifact(); 
        }
            artifact.i= Math.floor(Math.random() * (rows-1));
            artifact.j= Math.floor(Math.random() * (columns-1));                            
            (matrix[artifact.i][artifact.j]).UpdateArtifact();             
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
    window.requestAnimationFrame(StepArtifact);
}

Main();
