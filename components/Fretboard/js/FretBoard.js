import FretBody from "./fretBody";

export default class FretBoard {
    constructor(canvas,c,stringNum){
        stringNum === null? this.stringNum = 6: this.stringNum = stringNum;
        this.canvas = canvas;
        this.c = c;
        this.canvasDim = {x:800,y:400};
        this.fretNum = 12;
        this.strings = [];
        this.body = new FretBody(this.canvas, this.canvasDim,this.fretNum);
        
        this.#init();
        
        this.body.makeBody(this.c);
    }

    #init(){
        this.canvas.width = this.canvasDim.x;
        this.canvas.height = this.canvasDim.y;
    }
}