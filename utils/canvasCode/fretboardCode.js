import FretBoard from "@/components/Fretboard/js/FretBoard";


export function drawOnCanvas(canvas, c) {

    let fretboard = new FretBoard(canvas,c);
    // console.log(fretboard)
    return fretboard;

}