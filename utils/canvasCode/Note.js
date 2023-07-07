let oneDAllNotes = [
    //   0   1    2   3    4   5   6    7   8    9   10  11
        'C','C♯','D','D♯','E','F','F♯','G','G♯','A','A♯','B'
    ];
let accidentals = {
    1:['C♯','D♭'], 3:['D♯','E♭'], 6:['F♯','G♭'], 8:['G♯','A♭'], 10:['A♯','B♭']
};

//  ♯   ♭
    export default class Note{
    
        constructor(noteNumber,deg,accidental) {
            this.noteNumber = noteNumber;
            this.noteName = oneDAllNotes[noteNumber];
            this.accidental = accidental;
            this.color = "hsla("+deg+", 99%, 43%, 100%)";
            this.inScale = true;
            // this.canvas = canvas;
            // 0 = Square, 1 = Circle
            this.shape = (noteNumber+1)%2 == 0 ? 0 : 1;
        }
    
        drawNote(c,x,y,w,h,a) {
    
            //draw colour
            // if(a != null){
            //     c.fillStyle = this.color.replace('100%',a);
            // }else{
            //     c.fillStyle = this.color;
            // }
            if(this.inScale){

            
            c.fillStyle = this.color;
            if(this.shape == 1){
                c.beginPath();
                c.rect(x,y,w,h);
            }else{
                c.beginPath();
                c.arc(x+w/2,y+w/2,w/2,0,Math.PI*2);
            }
            c.fill();
            c.lineWidth = 2;
            c.strokeStyle = '#000000';
            c.stroke();
    
            //Draw note text

            c.textAlign = 'center';
            c.textBaseline = 'middle';
            c.fillStyle = '#ffffff';
            if(this.accidental){
                c.font = `${Math.ceil((w*0.5333)*0.65)}px sans-serif`;
                let a = {x:x+w*0.38, y:y+h*0.38}
                let b = {x:x+w*0.67 ,y:y+h*0.67 };
                c.fillText(accidentals[this.noteNumber][0], a.x, a.y);
                c.fillText(accidentals[this.noteNumber][1], b.x, b.y);
            }else{
                c.font = `${Math.ceil(w*0.5333)}px sans-serif`;
                c.fillText(this.noteName, x+w/2, y+h/2);
            }
        }
        }
    }
    
    