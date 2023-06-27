"use client";

import { drawOnCanvas } from '@/utils/canvasCode/test';
import React, { useEffect, useRef } from 'react';

const Canvas = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        drawOnCanvas(canvas, context);
    }, []);

    return ( 
        <canvas ref={canvasRef} width={800} height={800} className='canvas'/>
    );
};

export default Canvas;