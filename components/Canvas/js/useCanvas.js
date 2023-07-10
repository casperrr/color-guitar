
import { useRef, useEffect } from 'react';


const useCanvas = ({ instance }) =>{

    const canvasRef = useRef(null);

    useEffect(() => {
        const importScript = async () => {
            const { drawOnCanvas } = await import("@/utils/canvasCode/"+instance+".js");   
            const canvas = canvasRef.current;
            const c = canvas.getContext('2d');
            drawOnCanvas(canvas,c);   
        }
        importScript();

    }, [instance]);

    return canvasRef;

}

export default useCanvas;