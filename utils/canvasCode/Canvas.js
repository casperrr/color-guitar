

class canvas{

    constructor(canvas, c){
        this.canvas = canvas;
        this.c = c;
        this.width = canvas.width;
        this.height = canvas.height;
    }

    changeSize(w,h){
        canvas.width = this.width = w;
        canvas.height = this.height = h;
    }
}