import { QA } from "../data/FAQData";
import AccordionUsage from "./Accordion";
const FAQ = () => {
    return (  
        <div className="px-0 2xl:px-20 max-w-screen-2xl 2xl:mx-auto" >
            <section className="flex flex-col mx-4 md:mx-8 lg:mx-20 px-5 md:px-8 lg:px-10 py-10 lg:py-10 max-w-screen-2xl 2xl:mx-auto gap-10 lg:gap-16 bg-PE500">
                <h3 className="swear-text text-2xl/28 lg:text-32/38">
                    Frequently Asked Questions
                </h3>
                <div className="">
                    {
                        QA.map((data) => (
                            <AccordionUsage key={data.id} question={data.question} answer={data.answer} />
                        ))
                    }
                </div>
            </section>
        </div>
    );
}
 
export default FAQ;