"use client";
import React, {useRef, useEffect} from 'react'
// import Canvas from '@/components/Canvas/Canvas'
// import { handleCanvasClick } from '@/utils/canvasCode/CanvasCode';
// import CircleOfFiths from '@/components/CircleOfFiths/js/CircleOfFiths';


const CircleOfFiths = (props) => {

    const canvasRef = useRef();

    useEffect(() => {
        props.controller.addCanvas(canvasRef.current,2);
    },[canvasRef])

  // let test = new CircleOfFiths()

  return (
    <div className='canvas_container'>
        <h3>Circle Of Fiths</h3>
        {/* <Canvas instance={"CanvasCode"} /> */}
        <canvas className="canvas" ref={canvasRef}></canvas>

    </div>
  );
};

export default CircleOfFiths;