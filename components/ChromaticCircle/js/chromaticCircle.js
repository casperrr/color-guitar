import CircleOfFiths from "@/components/CircleOfFiths/js/CircleOfFiths";


export default class ChromaticCircle extends CircleOfFiths {
    constructor(canvas,c,notes){
        super(canvas,c,notes);
        this.#init();
        this.drawCircle(this.c)
    }

    #init(){
        this.canvas.width = this.canvasWidth;
        this.canvas.height = this.canvasWidth;

        let index = 0;//C note
        for(let i = 0; i < 12; i++){
            this.noteOrder[index] = index;
            index = ((index-5)+12)%12;
        }
    }
}

