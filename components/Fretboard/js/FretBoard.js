
export default class FretBoard {
    constructor(canvas,stringNum){
        this.strings = [];
        stringNum === null? this.stringNum = 6: this.stringNum = stringNum;
        this.canvas = canvas;
        this.canvasDim = {x:800,y:400};

        this.#init();
    }

    #init(){
        this.canvas.width = this.canvasDim.x;
        this.canvas.height = this.canvasDim.y;
    }
}