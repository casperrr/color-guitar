// "use server";

import { useRef, useEffect } from 'react';


const useCanvas = ({ instance }) =>{

    const canvasRef = useRef(null);

    useEffect(() => {
        const importScript = async () => {
            // console.log("@/utils/canvasCode/"+instance+".js")
            const { drawOnCanvas } = await import("@/utils/canvasCode/"+instance+".js");
            
            
            const canvas = canvasRef.current;
            const c = canvas.getContext('2d');
            drawOnCanvas(canvas,c);   
        }
        // console.log("working!");
        importScript();
        // draw(canvas, c);

        // import(`@/utils/canvasCode/CanvasCode.js`)
        // .then((module) => {
        //     module.execute
        // })
        

    }, [instance]);

    return canvasRef;

}

export default useCanvas;