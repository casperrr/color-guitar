
// import { FC } from 'react'
import Canvas from "@/components/Canvas";
import ChromaticCircle from "@/components/ChromaticCircle";
import CircleOfFiths from "@/components/CircleOfFiths";
import dynamic from "next/dynamic";

const test = dynamic(() => import("@/components/CircleOfFiths"),{ssr:false});


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
            <p>Also Remeber to put components in their own folder <br />
            along with their specific js code (if they have any) <br />
            Try using sin wave for the animation instead of lerp.</p>
        </>
    );
};

export default page;
