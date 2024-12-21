import { Link } from "react-router-dom/cjs/react-router-dom";
import { NewsData } from "../data/News";

const News = ({currentPage}) => {
    return (  
        <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 xl:grid-cols-4 xl:grid-rows-1 gap-8">
        {
            NewsData.filter(item => item.id !== currentPage).slice(0,4).map((item) => (
                <Link to={item.href} key={item.id}>
                    <div className="flex flex-col gap-3 group cursor-pointer brightness-100 lg:hover:brightness-75 transition ease-in-out">
                        <div 
                        className="h-300 bg-center bg-cover bg-no-repeat"
                        style={{ backgroundImage: `url(${item.src})` }}
                        ></div>
                        <div className="flex flex-col gap-3">
                            <h5 className="text-B300 text-xs/12 ibm-plex-sans-regular">
                                {item.date}
                            </h5>
                            <p className="text-B500 text-base/20 md:text-xl/24 ibm-plex-sans-regular capitalize lg:group-hover:underline">
                                {item.paragraph}
                            </p>
                        </div>
                    </div>
                </Link>
            ))
        }
        </div>
    );
}
export default News;