import { footerData } from "../data/FooterData";
import { Link,  useLocation } from "react-router-dom/cjs/react-router-dom";

const Footer = () => {
    const location = useLocation();
    const homePage = location.pathname === '/';
    
    return (  
        <footer className="bg-BL500 mt-[88px] lg:mt-36 ">
            <div className="px-0 2xl:px-20 max-w-screen-2xl mx-auto " >
                <div className={`flex flex-col gap-10 lg:gap-0 lg:flex-row items-start justify-between px-5 md:px-8 py-10 lg:px-20 lg:pt-20 2xl:px-0 ${homePage ? 'pb-32 !md:pb-36' : ''}`}>

    <div className="flex flex-col gap-8 w-full lg:w-2/12">
        <ul className="flex flex-col items-start gap-5">
            {
                footerData.links.map((link) => (
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
            GIT Global, 2024
        </p>
    </div>

    <div className="flex flex-col gap-10  w-full lg:w-5/12">
        {footerData.footerDetail.map((data) => (
            <p className="text-white ibm-plex-sans-regular text-base" key={data.id}>
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
            <div className="flex flex-row gap-10 lg:gap-4">
                {
                    footerData.socialMedia.map((data) => (
                        <a href={data.url} key={data.id} target="_blank">
                            <img src={data.image} alt={data.alt} className="size-6"/> 
                        </a>
                    ))
                }
            </div>
        </div>

        <div className="flex flex-col gap-5">
            <h5 className="capitalize text-B100 ibm-plex-sans-regular">
                contact us
            </h5>
            <div className="flex flex-col gap-4">
                {
                    footerData.contactInfo.map((data) => (
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
            </div>
        </footer>
    );
}
 
export default Footer;