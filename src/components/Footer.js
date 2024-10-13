import { links } from "../data/FooterData";
import { footerDetail } from "../data/FooterData";
import { contactInfo } from "../data/FooterData";
import { Link } from "react-router-dom/cjs/react-router-dom";

const Footer = () => {
    return (  
        <footer className="bg-BL500 mt-[88px] lg:mt-36 ">
            <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row items-start justify-between max-w-screen-2xl mx-auto px-5 pb-32 !md:pb-36 py-10 lg:px-20 lg:pt-20 2xl:px-0">

                <div className="flex flex-col gap-8 w-full lg:w-2/12">
                    <ul className="flex flex-col items-start gap-5">
                        {
                            links.map((link) => (
                                <Link to={link.href} key={link.id} className="text-white capitalize ibm-plex-sans-regular text-base">
                                    {link.title}
                                </Link>
                            ))
                        }
                    </ul>
                    <p className="text-white ibm-plex-sans-regular flex items-center gap-2">
                        <span className="size-6">
                            <img src="images/copyright.svg" alt="" className="h-full w-full"/>
                        </span>
                        GITS Global, 2024
                    </p>
                </div>

                <div className="flex flex-col gap-10  w-full lg:w-5/12">
                    {footerDetail.map((data) => (
                        <p className="text-white ibm-plex-sans-regular text-base">
                            {data.text}
                        </p>
                    ))}

                    <img src="images/footer-logo.png" alt="footer logo" className="h-14 w-20" />
                </div>

                <div className="flex flex-col  w-full lg:w-3/12 gap-8">
                    <div className="flex flex-col gap-5">
                        <h5 className="capitalize text-B100 ibm-plex-sans-regular">
                            follow us on
                        </h5>
                        <div className="flex flex-row gap-4">
                            <a href="">
                                <img src="images/facebook-icon.svg" alt="facebook icon" className="size-8"/>
                            </a>

                            <a href="">
                                <img src="images/instagram-icon.svg" alt="instagram icon" className="size-8"/>
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5">
                        <h5 className="capitalize text-B100 ibm-plex-sans-regular">
                            contact us
                        </h5>
                        <div className="flex flex-col gap-4">
                            {
                                contactInfo.map((data) => (
                                    <div className="flex flex-row items-center gap-3 justify-start" key={data.id}>
                                        <a href={data.href} className="flex flex-row items-center gap-3 justify-start">
                                            <img src={data.image} alt="" className="size-5"/>
                                            <p className="text-white ibm-plex-sans-regular text-base">
                                                {data.text}
                                            </p>
                                        </a>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;