
export default class FretBoard {
    constructor(canvas,stringNum){
        stringNum === null? this.stringNum = 6: this.stringNum = stringNum;
        this.canvas = canvas;
        this.canvasDim = {x:800,y:400};
        this.fretNum = 12;
        this.strings = [];
        this.body = null //Make body class here maybe


        this.#init();
    }

    #init(){
        this.canvas.width = this.canvasDim.x;
        this.canvas.height = this.canvasDim.y;
    }
}