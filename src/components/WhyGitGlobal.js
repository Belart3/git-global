import Testimonials from "./Testimonials";
import { TestimonialData } from "../data/Testimonials";
import SectionHeading from "./SectionHeading";

const WhyGitGlobal = () => {
    return (
        <section className="flex flex-col gap-16 lg:gap-10 items-start justify-start mx-4 md:mx-8 lg:mx-20 max-w-screen-2xl px-0 2xl:px-20 2xl:mx-auto">
            <SectionHeading title="Why choose GIT Global?" src="images/service.svg"/>

            <p className="swear-text-italic font-semibold italic text-40 lg:text-64/64">
                “We are loved by immigrants”
            </p>

            <div className="
            flex flex-col justify-items-center items-start w-full
            gap-y-6
            lg:grid
            lg:grid-rows-6 lg:grid-cols-4 lg:gap-x-7 lg:gap-y-0
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