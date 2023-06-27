
// import { FC } from 'react'
import Canvas from "@/components/Canvas";
import CircleOfFiths from "@/components/CircleOfFiths";

const page = () => {
    return(
        <div className="canvas_container">
            <h1>Hello this should have a canvas underneath it</h1>
            {/* <Canvas /> */}
            <CircleOfFiths />
        </div>
    );
};

export default page;
