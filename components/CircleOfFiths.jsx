// "use server";

import React from 'react'
import Canvas from '@/components/Canvas'
import { drawOnCanvas } from '@/utils/canvasCode/CanvasCode';
import dynamic from 'next/dynamic';

// const CanvasWithCode = dynamic(() => import('../utils/canvasCode'), {
//   ssr: false,
// })

const CircleOfFiths = () => {

  return (
    <div className='canvas_container'>
        <h3>Circle Of Fiths</h3>
        <Canvas instance={"CanvasCode"} />
    </div>
  );
};

export default CircleOfFiths;