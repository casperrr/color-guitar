// "use server";

import React from 'react'
import Canvas from '@/components/Canvas'
import { drawOnCanvas } from '@/utils/canvasCode/CanvasCode';

const CircleOfFiths = () => {

  return (
    <div className='canvas_container'>
        <h3>Circle Of Fiths</h3>
        <Canvas canvasCode={'drawOnCanvas'}/>
    </div>
  );
};

export default CircleOfFiths;