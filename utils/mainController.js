// "use client";
import FretBoard from "@/components/Fretboard/js/FretBoard";
import CircleOfFiths from "@/components/CircleOfFiths/js/CircleOfFiths";
import ChromaticCircle from "@/components/ChromaticCircle/js/chromaticCircle";
import Notes from "./canvasCode/Notes";


const scripts = [FretBoard,ChromaticCircle,CircleOfFiths];
// const notes = new Notes;

export default class MainController{
    constructor(){
        this.canvases = [];
        this.notes = new Notes();
        this.scales = new Options([
            {name:'Chromatic',color:'#ff0000',rules:[1,1,1,1,1,1,1,1,1,1,1,1]},
            {name:'Major',color:'#ffe50f',rules:[2,2,1,2,2,2,1]},
            {name:'Minor',color:'#10ff0f',rules:[2,1,2,2,1,2,2]},
        ]);
        let arr = [];
        this.notes.notesArr.map((note)=>{
            arr.push(
                {name:note.noteName,color:note.color}
            )});
        this.noteOptions = new Options(arr);
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

    update(){
        this.canvases.forEach((canvas) => {
            canvas.obj.draw();
        });
    }


}

class Options{
    constructor(options, initialOption){
        this.options = options;
        this.selected = initialOption ? initialOption : null;
    }

    setSelected(selected){
        this.selected = selected;
    }
}