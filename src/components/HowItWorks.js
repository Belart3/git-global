import Procedure from "./Procedure";
import { ProcedureData } from "../data/Procedure";
import SectionHeading from "./SectionHeading";

const HowItWorks = () => {
    return ( 
        <section className="flex flex-col justify-center items-center px-4 md:px-8 lg:px-20 max-w-screen-2xl 2xl:px-0 mx-auto gap-10 mb-32">
            <SectionHeading title="How Our Immigration Prepare Services Work" src="images/how-it-works.svg"/>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                <div className="h-96 md:h-500 xl:h-700 w-full max-w-xl xl:max-w-none mx-auto">
                    <img src="images/immigration.png" alt="" className="w-full h-full"/>
                </div>
                <div className="flex flex-col justify-center items-start gap-6 max-w-lg xl:max-w-none">
                    {
                        ProcedureData.map((data) => (
                            <Procedure key={data.id} heading={data.heading} paragraph={data.paragraph} id={data.id}/>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}
 
export default HowItWorks;