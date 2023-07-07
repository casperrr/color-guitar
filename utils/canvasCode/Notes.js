import Note from "@/utils/canvasCode/Note";

/*
I want this to be inbetween the note and circle of fiths classes

*/

export default class Notes {
    constructor(){
        this.notesArr = [];
        this.scale = null;
        this.root = null;
        this.initArray();
    }

    initArray(canvas){
        let index = 0;//C note
        for(let i = 0; i < 12; i++){
            let deg = 360/12*i;
            let accidental;
            if(i > 5 && i < 11){
                accidental = true;
            }else{
                accidental = false;
            }
            this.notesArr[index] = (
                {note: new Note(index,deg,canvas,accidental),
                scaleDeg: 1}

            );
            // this.notesArr[index] = new Note(index,deg,canvas,accidental);
            index = ((index-5)+12)%12;
        }
    }

    setScaleRoot(scale,root){
        this.scale = scale;
        this.root = root;
        console.log(this.scale)


        let rules = scale.rules;
        // 2,2,1,2,2,2,1
        let test = [2,2,1,2,2,2,1];


        let index = this.root.noteNumber;
        for(let i = 0; i < rules.length; i++){
            this.notesArr[index].note.inScale = true;
            for(let j = 1; j < rules[i]; j++){
                index = (index+1)%12;
                this.notesArr[index].note.inScale = false;
            }
            index = (index+1)%12;

        }
    }
}