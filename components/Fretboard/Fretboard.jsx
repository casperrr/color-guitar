"use client";
import React, { useEffect, useRef } from "react";
// import Canvas from "@/components/Canvas/Canvas";
// import canvas from "../Canvas/js/Canvas";

const Fretboard = (props) => {

    // const funcRef = useRef(props.func);
    // console.log(funcRef);

    const canvasRef = useRef();

    useEffect(() => {
        props.controller.addCanvas(canvasRef.current,0);
    },[canvasRef])

    return(
        <div className="canvas_container fretboardCanvas">
            <h3>Fretboard</h3>
        
            {/* <Canvas instance={"fretboardCode"} /> */}
            <canvas className="canvas" ref={canvasRef}></canvas>
            
        </div>
    );
};

export default Fretboard;