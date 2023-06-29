import React from 'react'
import Canvas from '@/components/Canvas/Canvas'
// import { handleCanvasClick } from '@/utils/canvasCode/CanvasCode';
// import CircleOfFiths from '@/components/CircleOfFiths/js/CircleOfFiths';


const CircleOfFiths = () => {

  // let test = new CircleOfFiths()

  return (
    <div className='canvas_container'>
        <h3>Circle Of Fiths</h3>
        <Canvas instance={"CanvasCode"} />
    </div>
  );
};

export default CircleOfFiths;