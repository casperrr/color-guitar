import React from "react";
import Canvas from "@/components/Canvas/Canvas";

const Fretboard = () => {


    return(
        <div className="canvas_container fretboardCanvas">
            <h3>Fretboard</h3>
        
            <Canvas instance={"fretboardCode"} />
            
        </div>
    );
};

export default Fretboard;