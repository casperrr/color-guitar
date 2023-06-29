
// import { FC } from 'react'
import Canvas from "@/components/Canvas";
import ChromaticCircle from "@/components/ChromaticCircle";
import CircleOfFiths from "@/components/CircleOfFiths";

const page = () => {
    return(
        <>
            <div className="circle_container">
                <CircleOfFiths />
                <ChromaticCircle />
            </div>
            <p>Remeber to use css modules <br />
            <a href="https://nextjs.org/docs/app/building-your-application/styling/css-modules#example" target="_blank">Link!</a></p>
            <p>Also Remeber to put components in their own folder <br />
            along with their specific js code (if they have any)</p>
        </>
    );
};

export default page;
