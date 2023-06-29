import ChromaticCircle from "@/components/ChromaticCircle/js/chromaticCircle";

export function drawOnCanvas(canvas, c){
    let test = new ChromaticCircle(canvas);
    // console.log("working! from chromatic circle")
    test.drawCircle(c);

}