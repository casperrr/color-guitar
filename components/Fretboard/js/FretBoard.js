import Notes from "@/utils/canvasCode/Notes";
import FretBody from "./fretBody";
import FretString from "./FretString";

export default class FretBoard {
    constructor(canvas,c,stringNum){
        // stringNum === null? this.stringNum = 6: this.stringNum = stringNum;
        if(stringNum){
            this.stringNum = stringNum;
        }else{
            this.stringNum = 6;
        }
        this.canvas = canvas;
        this.c = c;
        this.canvasDim = {x:900,y:400};
        this.fretNum = 12;
        this.strings = [];
        this.body = new FretBody(this.canvas, this.canvasDim,this.fretNum);
        this.notes = new Notes(canvas);

        this.tunings = [
            {name: 'Standard',tuning: [4,9,2,7,11,4]}
        ];
        this.tuning = this.tunings[0];

        this.#init();
        this.fretboardDim = this.body.makeBody(this.c);
        
        this.makeStrings();
        this.drawNotes();
    }

    makeStrings(){

        let yPosInterval = this.fretboardDim.height/(this.stringNum+1);

        for(let i = 0; i < this.stringNum; i++){
            this.strings.push(new FretString(
                this.c, // Context
                this.tuning.tuning[(this.tuning.tuning.length-1)-i], //Tuning (open note)
                yPosInterval*(i)+(this.canvasDim.y-yPosInterval*(this.stringNum-1))/2 // String y position
            ));
            
            //draw string
            this.c.fillStyle = '#ffffff';
            this.c.lineWidth = 4;

            this.c.beginPath();
            this.c.moveTo(this.canvasDim.x-this.fretboardDim.width,this.strings[i].yPos);
            this.c.lineTo(this.fretboardDim.width,
            this.strings[i].yPos);
            this.c.stroke();
            
        }

        

    }

    drawNotes(){
        let noteSize = 40;
        this.strings.forEach((string) => {
            for(let i = 0; i < this.fretNum; i++){
                let index = (i+string.openNote)%12;
                this.notes.notesArr[index].drawNote(
                    this.c,
                    this.body.fretArray[i].notePos-(noteSize*0.5),
                    string.yPos-(noteSize*0.5),
                    noteSize,
                    noteSize
                )
                
            }
        });

    }

    #init(){
        this.canvas.width = this.canvasDim.x;
        this.canvas.height = this.canvasDim.y;
    }
}