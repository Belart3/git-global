import Procedure from "./Procedure";
import { ProcedureData } from "../data/Procedure";
import SectionHeading from "./SectionHeading";

const HowItWorks = () => {
    return ( 
        <section className="flex flex-col justify-center items-center mx-4 md:mx-8 lg:mx-20 max-w-screen-2xl px-0 2xl:px-20 2xl:mx-auto gap-10">
            <SectionHeading title="How Our Immigration Prepare Services Work" src="images/how-it-works.svg"/>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 items-center">
                <div className="h-96 md:h-500 xl:h-700 w-full max-w-xl xl:max-w-none mx-auto  bg-immigration-section bg-center bg-no-repeat bg-contain"></div>
                <div className="flex flex-col justify-center items-start max-w-lg xl:max-w-none">
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