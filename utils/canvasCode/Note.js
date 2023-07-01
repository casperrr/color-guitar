let oneDAllNotes = [
    //   0   1    2   3    4   5   6    7   8    9   10  11
        'C','C♯','D','D♯','E','F','F♯','G','G♯','A','A♯','B'
    ];
    export default class Note{
    
        constructor(noteNumber,deg,canvas) {
            this.noteNumber = noteNumber;
            this.noteName = oneDAllNotes[noteNumber];
            // this.natural;
            this.color = "hsl("+deg+", 100%, 43%)";
            this.canvas = canvas;
            // 0 = Square, 1 = Circle
            this.shape = (noteNumber+1)%2 == 0 ? 0 : 1;
        }
    
        drawNote(c,x,y,w,h) {
    
            //draw colour 
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
            c.font = `${Math.ceil(w*0.5333)}px sans-serif`;
            c.textAlign = 'center';
            c.textBaseline = 'middle';
            c.fillStyle = '#ffffff';
            c.fillText(this.noteName, x+w/2, y+h/2);
        }
    }
    
    