import CircleOfFiths from "@/components/CircleOfFiths/js/CircleOfFiths";
import Note from '@/utils/canvasCode/Note'

export default class ChromaticCircle extends CircleOfFiths {
    constructor(canvas){
        super(canvas);
        this.#init();
    }

    #init(){
        this.canvas.width = this.canvasWidth;
        this.canvas.height = this.canvasWidth;

        let index = 0;//C note
        for(let i = 0; i < 12; i++){
            let deg = 360/12*i;
            this.notes[index] = new Note(index,deg,this.canvas);
            index = ((index-5)+12)%12;
        }
    }
}

