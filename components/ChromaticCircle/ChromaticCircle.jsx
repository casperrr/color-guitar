import React, {useRef, useEffect} from 'react'
// import Canvas from '@/components/Canvas/Canvas'



const ChromaticCircle = (props) => {

  const canvasRef = useRef();

  useEffect(() => {
      props.controller.addCanvas(canvasRef.current,1);
  },[canvasRef])

  return (
    <div className='canvas_container'>
        <h3>Chromatic Circle</h3>
        {/* <Canvas instance={"chromaticCircleCode"}/> */}
        <canvas className="canvas" ref={canvasRef}></canvas>
    </div>
  )
}

export default ChromaticCircle