export default class FretBody{
    constructor(canvas,canvasDim, fretNum){
        this.canvas = canvas;
        this.canvasDim = canvasDim;
        this.fretNum = fretNum;
        this.fretboardDim = {
            width:0.98*this.canvasDim.x,
            height:0.9*this.canvasDim.y
        };
        this.fretMarkers = [1,3,5,7,9,12];
        this.fretArray = [];

    }

    makeBody(c){

        let interval = (this.fretboardDim.width-(this.canvasDim.x-this.fretboardDim.width))/this.fretNum+1;
        for(let i = 0; i < this.fretNum+1; i++){
            this.fretArray[i] = this.addFret(c,
                interval*(i+1)+(this.canvasDim.x-this.fretboardDim.width),
                (interval*(i)+(this.canvasDim.x-this.fretboardDim.width)+(interval/2)),
                i
                );
            // this.addFret(c,interval*(1+i),interval*(1+i)-interval/2)
                
            
        }

        c.strokeStyle = '#ffffff';
        c.lineWidth = 3;
        c.beginPath();
        c.rect(
            interval*(1)+(this.canvasDim.x-this.fretboardDim.width),
            this.canvasDim.y-this.fretboardDim.height,
            interval*(this.fretNum-1),
            this.fretboardDim.height-(this.canvasDim.y-this.fretboardDim.height));
        c.stroke();
        c.closePath();

        return this.fretboardDim;

    }

    addFret(c,fretPos,notePos,number){

        c.strokeStyle = '#ffffff';
        c.fillStyle = '#ffffff99';
        c.lineWidth = 2;
        c.beginPath();
        c.moveTo(fretPos,this.canvasDim.y-this.fretboardDim.height);
        c.lineTo(fretPos,this.fretboardDim.height);
        c.stroke();
        c.closePath();

        if(this.fretMarkers.includes(number)){
            let rad = 7.5;
            c.beginPath();
            c.arc(notePos,
                this.canvasDim.y/2,
                rad,
                0,
                Math.PI*2
                );
            c.lineWidth=1;
            c.closePath();
            c.fill();
        }

        return {
            fretPos: fretPos,
            notePos: notePos,
            fretNumber: number,
        }
    }


}

/*
Could have either a.fretArray storing like positions that I can like use to position everything.
I can just work out the maths and distance on the spot but wont be able to as easily chang stuff .
*/