
// import { FC } from 'react'
import Canvas from "@/components/Canvas/Canvas";
import ChromaticCircle from "@/components/ChromaticCircle/ChromaticCircle";
import CircleOfFiths from "@/components/CircleOfFiths/CircleOfFiths";
import dynamic from "next/dynamic";

const test = dynamic(() => import("@/components/CircleOfFiths/CircleOfFiths"),{ssr:false});


const page = () => {
    return(
        <>
            <div className="circle_container">
                <test />
                <CircleOfFiths />
                <ChromaticCircle />
            </div>
            <p>Remeber to use css modules <br />
            <a href="https://nextjs.org/docs/app/building-your-application/styling/css-modules#example" target="_blank">Link!</a></p>
            
        </>
    );
};

export default page;
