
let naturalNotes = [
    'C','D','E','F','G','A','B'
];


let allNotes = [
    ['C♭','C','C♯'],
    ['D♭','D','D♯'],
    ['E♭','E','E♯'],
    ['F♭','F','F♯'],
    ['G♭','G','G♯'],
    ['A♭','A','A♯'],
    ['B♭','B','B♯']
];

/*
G maj
G,A,B,C,D,E,F#,G
1,2,3^4,5,6,7^8

G = 7
7,9,



Symbols - ♯ ♭
*/

let oneDAllNotes = [
//   0   1    2   3    4   5   6    7   8    9   10  11
    'C','C♯','D','D♯','E','F','F♯','G','G♯','A','A♯','B'
];
export default class Note{

    constructor(noteNumber,deg) {
        this.noteNumber = noteNumber;
        this.noteName = oneDAllNotes[noteNumber];
        // this.natural;
        this.color = "hsl("+deg+", 100%, 50%)";
    }

    drawNote(c,x,y,w,h) {
        
        c.fillStyle = this.color;
        c.fillRect(x,y,w,h);
        c.font = '40px sans-serif';
        c.textAlign = 'center';
        c.textBaseline = 'middle';
        c.fillStyle = '#ffffff';
        c.fillText(this.noteName, x+w/2, y+h/2);


    }

}

