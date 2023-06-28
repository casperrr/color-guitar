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
    }

    drawNote(c,x,y,w,h) {
        
        c.fillStyle = this.color;
        c.fillRect(x,y,w,h);
        c.font = `${this.canvas.width*0.06}px sans-serif`;
        c.textAlign = 'center';
        c.textBaseline = 'middle';
        c.fillStyle = '#ffffff';
        c.fillText(this.noteName, x+w/2, y+h/2);
    }
}

