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
        this.fretNum = 12 +(1);
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
        this.drawFretNumbers();
    }

    draw(){
        this.c.clearRect(0,0,this.canvasDim.width,this.canvasDim.height);
        this.drawNotes();
        this.drawFretNumbers();
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
            this.c.moveTo(
                this.body.fretArray[0].fretPos,
                this.strings[i].yPos
            );
            // this.c.moveTo(
            //     this.canvasDim.x-this.fretboardDim.width,
            //     this.strings[i].yPos
            // );
            this.c.lineTo(
                this.body.fretArray[this.fretNum-1].fretPos,
                this.strings[i].yPos
            );
            // this.c.lineTo(this.fretboardDim.width,
            // this.strings[i].yPos);
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
                    (this.body.fretArray[i].notePos-(noteSize*0.5)),
                    // (this.body.fretArray[i].notePos-(noteSize*0.5))-(this.body.fretArray[1].notePos-this.body.fretArray[0].notePos),
                    string.yPos-(noteSize*0.5),
                    noteSize,
                    noteSize
                )
                
            }
        });

        /*
        I need to have a way to draw the open notes
        I need the fretboard to include a 0 fret for the open strings
        but everything should draw from the first string but still have the pos of the 0 fret. 
        */

    }

    drawFretNumbers(){
        this.c.font = '18px sans-serif';
        this.c.textBaseline = 'hanging';
        this.c.fillStyle = '#ffffff';
        this.body.fretArray.forEach(x => {
            this.c.fillText(
                x.fretNumber,
                x.notePos,
                this.fretboardDim.height*1.02
            );
        });
    }

    #init(){
        this.canvas.width = this.canvasDim.x;
        this.canvas.height = this.canvasDim.y;
    }
}