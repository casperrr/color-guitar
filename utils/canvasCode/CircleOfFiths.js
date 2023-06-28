import Note from './Notes';

export default class CircleOfFiths{

    constructor(canvas){
        this.notes = [];
        this.canvas = canvas;
        this.canvasWidth = 400;
        this.radius = this.canvasWidth*0.375;
        this.noteSize = this.canvasWidth*0.1125;
        let index = 0;//C note
        for(let i = 0; i < 12; i++){
            let deg = 360/11*i;
            this.notes.push(new Note(index,deg,canvas));
            index = ((index-5)+12)%12;
        }
        this.#init();
    }

    drawCircle(c,r2){
        let centerOff = {x:(this.canvas.width/2)-(this.noteSize/2), y:(this.canvas.height/2)-(this.noteSize/2)}
        let angle = 0;
        let otherRad = this.radius;
        for (let i = 0; i < 12; i++) {
            angle = (i-3) * (Math.PI*2)/12;
            (i+1)%2 == 0 ? otherRad = r2:otherRad = this.radius;
            let x = Math.cos(angle)*otherRad+centerOff.x;
            let y = Math.sin(angle)*otherRad+centerOff.y;
            this.notes[i].drawNote(c,x,y,this.noteSize,this.noteSize);
        }
    }

    animateToChromatic(c){
        let otherRad = this.radius;
        let animationLoop = setInterval(()=>{
            c.clearRect(0,0,this.canvas.width,this.canvas.height);
            this.drawCircle(c,otherRad);
            otherRad = (this.lerp(otherRad,-this.radius,0.02));
            if(-this.radius == Math.floor(otherRad)){
                console.log("done!");
                clearInterval(animationLoop);
            }
            // console.log(i,otherRad);
        },10);
    }


    lerp(a,b,alpha){
        return a+alpha*(b-a);
    }

    #init(){
        this.canvas.width = this.canvasWidth;
        this.canvas.height = this.canvasWidth;
    }
}
