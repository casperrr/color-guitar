import CircleOfFiths from '@/components/CircleOfFiths/js/CircleOfFiths';

export function drawOnCanvas(canvas, c){

    var test = new CircleOfFiths(canvas);
    test.drawCircle(c);
    console.log(test);

    // test.animateToChromaticV2(c);
    
    
    

}

// export function handleCanvasClick(){
//     test.animateToChromaticV2(c);
// }

