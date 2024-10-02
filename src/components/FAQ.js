import { QA } from "../data/FAQData";
import AccordionUsage from "./Accordion";
const FAQ = () => {
    return (  
        <section className="flex flex-col mx-4 lg:mx-20 py-10 px-5 lg:py-10 lg:px-10 max-w-screen-2xl mx-auto 2xl:mx-auto gap-10 lg:gap-16 lg:gap-16 bg-PE500">
            <h3 className="swear-text text-32/38">
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
    );
}
 
export default FAQ;