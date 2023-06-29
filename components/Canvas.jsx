// "use client";

import { drawOnCanvas } from '@/utils/canvasCode/CanvasCode';
import React, { useEffect, useRef } from 'react';

/*
♥ We need to be able to pass something into the canvas component.
♥ Then do something with that, which defines what peice of code it uses. (either in another file or some otherway)

Breaking down 2:
♥ currently we call a function within another imported file that runs the code.
♥ we need the canvas and its context.

~ LOOK AT THE PARENT COMPONENT ( THE ONE WITH <CANVAS /> IN IT AND IMPORT THE CODE OR SOMETHING FROM THERE DO IT NOWWWW)

IDEA:
man an animation for the two circles that  starts with the circle of fiths and then it does the animation and then the other one slides into place nextto the other one (on a seperate canvas) then the circle of fiths does and animation back to the circle of fiths arangment. After the new circle has apperad the title of it (chromatic circle) pops out from under it u know like all linearly interpolated and ting.

is there a way to get the parent name the component is used in so I can use that to get the js.

*/



const Canvas = ({ canvasCode }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        console.log(canvasCode)
        drawOnCanvas(canvas, context);
        // canvasCode(canvas,context);

    }, [canvasCode]);

    return ( 
        <canvas ref={canvasRef} className='canvas'/>
    );
};

export default Canvas;