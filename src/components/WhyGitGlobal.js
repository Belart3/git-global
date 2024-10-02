import Testimonials from "./Testimonials";
import { TestimonialData } from "../data/Testimonials";
import SectionHeading from "./SectionHeading";

const WhyGitGlobal = () => {
    return (
        <section className="flex flex-col gap-16 lg:gap-10 items-start justify-start px-4 md:px-8 lg:px-20 2xl:px-0 max-w-screen-2xl mx-auto mb-32">
            <SectionHeading title="Why choose GIT Global?" src="images/service.svg"/>

            <p className="swear-text-semibold italic text-5xl lg:text-64/64">
                “We are loved by immigrants”
            </p>

            <div className="
            grid
            grid-cols-7 grid-rows-4 gap-y-6
            xl:grid-rows-6 xl:grid-cols-4 xl:gap-x-7 xl:gap-y-0
            ">
                {
                    TestimonialData.map((data) => (
                        <Testimonials title={data.title} author={data.authur} testimony={data.testimony} key={data.id}/>
                    ))
                }
            </div>
        </section>
    );
}

export default WhyGitGlobal;