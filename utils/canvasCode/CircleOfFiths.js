import Note from './Notes';

export default class CircleOfFiths{

    constructor(canvas){
        this.notes = [];
        this.canvas = canvas;
        this.radius = 300;
        this.noteSize = 70;
        let index = 0;//C note
        for(let i = 0; i < 12; i++){
            let deg = 360/11*i;
            this.notes.push(new Note(index,deg));
            index = ((index-5)+12)%12;
        }
    }

    drawCircle(c){
        let centerOff = {x:(this.canvas.width/2)-(this.noteSize/2), y:(this.canvas.height/2)-(this.noteSize/2)}
        let angle = 0;
        for (let i = 0; i < 12; i++) {
            angle = (i-3) * (Math.PI*2)/12;
            let x = Math.cos(angle)*this.radius+centerOff.x;
            let y = Math.sin(angle)*this.radius+centerOff.y;
            this.notes[i].drawNote(c,x,y,this.noteSize,this.noteSize);
        }
    }
}
