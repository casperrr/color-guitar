
import Notes from '@/utils/canvasCode/Notes';

export default class CircleOfFiths{

    constructor(canvas,c,options){
        this.notes = new Notes(canvas);
        this.noteOrder =[];
        this.canvas = canvas;
        this.c = c;
        this.options = options;
        this.canvasWidth = 400;
        // this.radius = this.canvasWidth*0.375;
        // this.noteSize = this.canvasWidth*0.1125;
        this.pos = {
            radius: this.canvasWidth*0.375,
            linePointOffset: 10,
            noteSize: this.canvasWidth*0.1125,
            
        }
        
        this.#init();
        this.drawCircle(this.c)

        /* 

        I could have an array of objects that have the x,y position of the notes with a positions of wherre the line connects and the interval could be drawn or something.




        */
    }

    draw(){
        this.drawCircle(this.c);
        this.connectNotes();
    }

    drawCircle(c,r2){
        let centerOff = {x:(this.canvas.width/2)-(this.pos.noteSize/2), y:(this.canvas.height/2)-(this.pos.noteSize/2)}
        let angle = 0;
        let otherRad = this.pos.radius;
        c.clearRect(0,0,this.canvas.width,this.canvas.height);
        // console.log(this.noteOrder)
        for (let i = 0; i < 12; i++) {
            angle = (i-3) * (Math.PI*2)/12;
            if(r2 != null)(i+1)%2 == 0 ? otherRad = r2:otherRad = this.pos.radius;
            let x = Math.cos(angle)*otherRad+centerOff.x;
            let y = Math.sin(angle)*otherRad+centerOff.y;
            this.notes.notesArr[this.noteOrder[i]].note.drawNote(c,x,y,this.pos.noteSize,this.pos.noteSize);
        }
    }

    connectNotes(){    
        for(let i = 0; i < 12; i++){
            
        }
    }

    animateToChromatic(c){
        // Using lerp gives only 1 way easing.
        let otherRad = this.pos.radius;
        let animationLoop = setInterval(()=>{
            
            this.drawCircle(c,otherRad);
            otherRad = (this.lerp(otherRad,-this.pos.radius,0.02));
            if(-this.pos.radius == Math.floor(otherRad)){
                console.log("done!");
                clearInterval(animationLoop);
            }
        },10);
    }

    animateToChromaticV2(c){
        // Using cos to animate gives ease in and out.
        let otherRad = this.pos.radius;
        let angle = 0;
        let n = 50;
        let increment = (Math.PI)/n;
        // for(let i = 0; i < n; i++){
        //     angle += increment;
        //     // console.log(angle);
        // }
        let animationLoop = setInterval(() => {
            this.drawCircle(c,otherRad);
            angle += increment;
            otherRad = Math.cos(angle)*this.pos.radius;
            // console.log(otherRad);
            if(-this.pos.radius == Math.floor(otherRad)){
                console.log("done");
                clearInterval(animationLoop);
            }
        },30);

    }


    lerp(a,b,alpha){
        return a+alpha*(b-a);
    }

    #init(){
        this.canvas.width = this.canvasWidth;
        this.canvas.height = this.canvasWidth;

        let index = 0;//C note
        for(let i = 0; i < 12; i++){
            // let deg = 360/12*i;
            this.noteOrder.push(index);
            index = ((index-5)+12)%12;
        }
    }
}
