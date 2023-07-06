import Note from "@/utils/canvasCode/Note";

/*
I want this to be inbetween the note and circle of fiths classes

*/

export default class Notes {
    constructor(canvas){
        this.notesArr = [];
        this.scale = null;
        this.root = null;
        this.initArray(canvas);
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
            this.notesArr[index] = new Note(index,deg,canvas,accidental);
            index = ((index-5)+12)%12;
        }
    }
}