// "use client";
import FretBoard from "@/components/Fretboard/js/FretBoard";
import CircleOfFiths from "@/components/CircleOfFiths/js/CircleOfFiths";
import ChromaticCircle from "@/components/ChromaticCircle/js/chromaticCircle";

function Main(Fretboard,CircleOfFiths,ChromaticCircle){
    // let main = new MainController();
    // console.log(Fretboard);
    // console.log(CircleOfFiths);
    // console.log(ChromaticCircle);

    console.log("hi!!!!!!!!!")
    
    // I need to from the page.jsx call the main function and pass in the reference to each of the canvases.
}

const scripts = [FretBoard,ChromaticCircle,CircleOfFiths];

export default class MainController{
    constructor(){
        this.canvases = [];
    }

    addCanvas(canvas,script){
        let object = {
            canvas:canvas,
            c:canvas.getContext('2d'),
            script:scripts[script],
            obj:null,
        }
        this.canvases.push(object);
    }

    runScripts(){
        this.canvases.forEach((canvas)=>{
            canvas.obj = new canvas.script(canvas.canvas,canvas.c);
        });
    }


}