import React from "react";
import Canvas from "@/components/Canvas/Canvas";

const Fretboard = () => {


    return(
        <div className="canvas_container fretboardCanvas">
            <h3>Fretboard</h3>
            <div>
                <Canvas instance={"fretboardCode"} />
            </div>
        </div>
    );
};

export default Fretboard;