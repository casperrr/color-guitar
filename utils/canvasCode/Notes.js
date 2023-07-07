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

        // 2,2,1,2,2,2,1
        let test = [2,2,1,2,2,2,1];

        let counter = 0;
        let scaleDeg = 0;
        for(let i = this.root; i < 12+this.root; i++){
            if(counter < test[scaleDeg]){
                this.notesArr[i].inScale = false;
                counter++;
            }else if(counter == test[scaleDeg]){
                this.notesArr.inScale = true;
                counter = 0;
                scaleDeg++;
            }
            // console.log(this.notesArr[i].inScale);
        }
    }
}